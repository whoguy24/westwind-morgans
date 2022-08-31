///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../HorseDetail/HorseDetail.css';

// Import Libraries
import { useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import PedigreeGraph from "../PedigreeGraph/PedigreeGraph";

// Import MUI Components
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function HorseDetail({category}) {

  let { id } = useParams();

  // Redux Variables
  const dispatch = useDispatch();

  // React Router Variables
  const navigate = useNavigate();

  // Redux Store Variables
  const horse = useSelector(store => store.horse);

  let category_title = ""

  switch (category) {
    case "stallions": 
      category_title = "Stallions"
      break;
    case "mares": 
      category_title = "Mares"
      break;
    case "stock_for_sale": 
      category_title = "Stock for Sale"
      break;
  }

  // Fetch Object from Database On Page Load
  useEffect(() => {
    dispatch({ type: "FETCH_HORSE", route:category, id: id });
  }, [id]);

  // Render DOM
  return (
    <>

      <div className="content-container">

        <div className="content-banner">
          <img className="content-banner-image" src={`/images/banner_${category}.png`}/>
        </div>

        <div className="section-header-banner">
          <Typography className="section-header-banner-text">{category_title}</Typography>
        </div>

        <div className="content-toolbar">
          <Breadcrumbs className="content-toolbar-breadcrumbs">
            <NavLink to="/home">Westwind Morgans</NavLink>
            <NavLink to={`/${horse.route}`}>{category_title}</NavLink>
            <NavLink to={`/${horse.route}/${horse.id}`}>{horse.name}</NavLink>
          </Breadcrumbs>
        </div>

        <div className="content-detail-header">

            <Button className="form-button" onClick={()=>navigate(-1)}>Back</Button>

            <Typography className="content-detail-header-text">{horse.name}</Typography>

            <Button className="form-button" onClick={()=>navigate("/contact")}>Learn More</Button>

        </div>

        <div className="content-detail-header-divider"/>

        <div className="content-detail-section-container">

          <a className="content-detail-section-image-link" href={horse.profile_url} target="_blank">
            <img className="content-detail-section-image" src={horse.profile_url ? horse.profile_url : "images/placeholder_profile.png"} />
          </a>

          <div className="content-detail-section-info">
            <Typography className="content-detail-section-basic-header">{horse.name}</Typography>
            <Typography className="content-detail-section-basic-text">{horse.color}</Typography>
            <Typography className="content-detail-section-basic-text">{horse.year}</Typography>
          </div>

        </div>

        { horse.parents?.length > 0 && 
          <>

            <div className="content-detail-subheader">
              <div className="content-detail-subheader-divider"/>
              <Typography className="content-detail-subheader-text">Pedigree</Typography>
              <div className="content-detail-subheader-divider"/>
            </div>

            <div className="content-detail-section-container">
                <PedigreeGraph horse={horse}/>
            </div>

          </>
        }

        { horse.progeny?.length > 0 &&

          <>

            <div className="content-detail-subheader">
              <div className="content-detail-subheader-divider"/>
              <Typography className="content-detail-subheader-text">Progeny</Typography>
              <div className="content-detail-subheader-divider"/>
            </div>

            <div className="content-detail-section-gallery">

              {horse.progeny.map((horse) => {
                  return (
                    <Card className="gallery-card" key={horse.id} onClick={()=>navigate(`/${horse.route}/${horse.id}`)}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="300px"
                          image={horse.profile_url? horse.profile_url: "images/placeholder_profile.png"}
                          alt="placeholder_stallion"
                        />
                        <div className="gallery-card-label">
                          <Typography className="gallery-card-label-text">{horse.name}</Typography>
                        </div>
                      </CardActionArea>
                    </Card>
                  )
              })}

            </div>

          </>

        }

        { horse.images?.length > 0 &&

          <>

            <div className="content-detail-subheader">
              <div className="content-detail-subheader-divider"/>
              <Typography className="content-detail-subheader-text">Gallery</Typography>
              <div className="content-detail-subheader-divider"/>
            </div>

            <div className="content-detail-section-gallery">

                { horse.images.map((image) => {
                  return (
                    <Card className="gallery-card" key={image.id} >
                    <CardActionArea>
                      <a href={image.url} target="_blank">
                        <CardMedia
                          component="img"
                          image={image.url}
                        />
                      </a>
                    </CardActionArea>
                  </Card>
                  )
              })}

            </div>

          </>

        }

      </div>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default HorseDetail;