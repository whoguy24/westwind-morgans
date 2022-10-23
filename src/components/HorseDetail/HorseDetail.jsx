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

// Import Custom Components
import HorseCard from "../HorseCard/HorseCard";
import PedigreeGraph from "../PedigreeGraph/PedigreeGraph";
import SectionHeader from "../SectionHeader/SectionHeader";
import SectionBanner from "../SectionBanner/SectionBanner";
import SectionSubheader from "../SectionSubheader/SectionSubheader";

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

function HorseDetail({type, title}) {

  let { id } = useParams();

  // Redux Variables
  const dispatch = useDispatch();

  // React Router Variables
  const navigate = useNavigate();

  // Redux Store Variables
  const horse = useSelector(store => store.horse);

  // Fetch Object from Database On Page Load
  useEffect(() => {
    dispatch({ type: "FETCH_HORSE", route: type, id: id });
    window.scrollTo(0, 0);
  }, [id]);

  // Render DOM
  return (
    <>

      <div className="content-container">

        <SectionBanner image={`banner_${type}`}/>
        <SectionHeader style="banner" title={title}/>

        <div className="content-toolbar">
          <Breadcrumbs className="content-toolbar-breadcrumbs">
            <NavLink to="/home">Westwind Morgans</NavLink>
            <NavLink to={`/${horse.type}`}>{title}</NavLink>
            <NavLink to={`/${horse.type}/${horse.id}`}>{horse.name}</NavLink>
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
            <img className="content-detail-section-image" src={horse.profile_id ? `/assets/database/${horse.profile_id}.jpg` : "/assets/static/profile.png"} />
          </a>

          <div className="content-detail-section-info">

            { horse.type != "testimonials" ?

              <>
                <Typography className="content-detail-section-basic-header">{horse.name}</Typography>
                <Typography className="content-detail-section-basic-text">{horse.calc_year}</Typography>
                <Typography className="content-detail-section-basic-text">{horse.breed}</Typography>
                <Typography className="content-detail-section-basic-text">{horse.color}</Typography>
                <Typography className="content-detail-section-basic-text">{horse.category}</Typography>
                <a className="content-detail-section-basic-text" href={horse.pedigree_url} target="_blank">View Pedigree</a>
                <Typography className="content-detail-section-basic-text">{horse.description}</Typography>
              </>

              :

              <>
                <Typography className="content-detail-section-basic-text">{horse.testimonial}</Typography>
              </>

            }

          </div>

        </div>

        { horse.parents?.length > 0 && 
          <>

            <SectionSubheader title="Pedigree"/>

            <div className="content-detail-section-container">
                <PedigreeGraph horse={horse}/>
            </div>

          </>
        }

        { horse.images?.length > 0 &&

        <>

          <SectionSubheader title="Gallery"/>

          <div className="content-detail-section-gallery">

              { horse.images.map((image) => {

                return (

                  image.id == horse.profile_id? null :

                    <Card className="gallery-card" key={image.id} >
                      <CardActionArea>
                        <a href={`/assets/database/${image.id}.jpg`} target="_blank">
                          <CardMedia
                            className="gallery-card-image"
                            component="img"
                            image={`/assets/database/${image.id}.jpg`}
                          />
                        </a>
                      </CardActionArea>
                    </Card>

                )
                
              }

            )}

          </div>

        </>

        }

        { horse.progeny?.length > 0 &&

          <>

            <SectionSubheader title="Progeny"/>

            <div className="content-detail-section-gallery">

              {horse.progeny.map((horse) => {
                  return (
                    <HorseCard key={horse.id} horse={horse}/>
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