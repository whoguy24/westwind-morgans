///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../StallionDetail/StallionDetail.css';

// Import Libraries
import { useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

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

function StallionDetail() {

  let { id } = useParams();

  // Redux Variables
  const dispatch = useDispatch();

  // React Router Variables
  const navigate = useNavigate();

  // Redux Store Variables
  const stallion = useSelector(store => store.stallion);

  // Fetch Object from Database On Page Load
  useEffect(() => {
    dispatch({ type: "FETCH_STALLION", payload:id });
  }, [id]);

  // Render DOM
  return (
    <>

      <div className="content-container">

        <div className="content-banner">
          <img className="content-banner-image" src="/images/stallion_banner.png" alt="stallion"/>
        </div>

        <div className="section-header-banner">
          <Typography className="section-header-banner-text">Stallions</Typography>
        </div>

        <div className="content-toolbar">

          <Breadcrumbs className="content-toolbar-breadcrumbs">
            <NavLink to="/home">Westwind Morgans</NavLink>
            <NavLink to="/stallions">Stallions</NavLink>
            <NavLink to={`/stallions/${stallion.id}`}>{stallion.name}</NavLink>
          </Breadcrumbs>

        </div>

        <div className="content-detail-header">

            <Button className="form-button" onClick={()=>navigate("/stallions")}>Back</Button>

            <Typography className="content-detail-header-text">
              {stallion.name}
            </Typography>

            <Button className="form-button">Learn More</Button>

        </div>

        <div className="content-detail-header-divider"/>

        <div className="content-detail-section-container">

            <img className="content-detail-section-image" src={stallion.url} alt="profile_stallion" />

            <div  className="content-detail-section-info">

              <Typography className="content-detail-section-basic-header">{stallion.name}</Typography>
              <Typography className="content-detail-section-basic-text">{stallion.color}</Typography>
              <Typography className="content-detail-section-basic-text">{stallion.year}</Typography>

            </div>

        </div>

        <div className="content-detail-subheader">
          <div className="content-detail-subheader-divider"/>
          <Typography className="content-detail-subheader-text">Pedigree</Typography>
          <div className="content-detail-subheader-divider"/>
        </div>

        <div className="content-detail-section-container">

            <div  className="content-detail-section-info">

              <Typography className="content-detail-section-basic-text">A bunch of Pedigree info here. Graphics, etc.<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></Typography>

            </div>

        </div>










        <div className="content-detail-subheader">
          <div className="content-detail-subheader-divider"/>
          <Typography className="content-detail-subheader-text">Gallery</Typography>
          <div className="content-detail-subheader-divider"/>
        </div>

        <div className="content-detail-section-gallery">

          <Card className="gallery-card" >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://res.cloudinary.com/wobrien-cloud/image/upload/v1660259844/westwind-morgans/4_qtw4wo.png"
                  alt="home_stallions"
                />
              </CardActionArea>
            </Card>

            <Card className="gallery-card" >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://res.cloudinary.com/wobrien-cloud/image/upload/v1660259844/westwind-morgans/5_umbso8.png"
                  alt="home_stallions"
                />
              </CardActionArea>
            </Card>

            <Card className="gallery-card" >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://res.cloudinary.com/wobrien-cloud/image/upload/v1660259844/westwind-morgans/6_r7gn1p.png"
                  alt="home_stallions"
                />
              </CardActionArea>
            </Card>

            <Card className="gallery-card" >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://res.cloudinary.com/wobrien-cloud/image/upload/v1660259844/westwind-morgans/7_cc78e8.png"
                  alt="home_stallions"
                />
              </CardActionArea>
            </Card>

            <Card className="gallery-card" >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://res.cloudinary.com/wobrien-cloud/image/upload/v1660259844/westwind-morgans/8_ivtixp.png"
                  alt="home_stallions"
                />
              </CardActionArea>
            </Card>

        </div>

      </div>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default StallionDetail;