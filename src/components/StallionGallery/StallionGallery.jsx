///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../StallionGallery/StallionGallery.css';

// Import Libraries
import { useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

// Import Custom Components
import SearchBar from "../SearchBar/SearchBar";

// Import MUI Components
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function StallionGallery() {

  // Redux Variables
  const dispatch = useDispatch();

  // React Router Variables
  const navigate = useNavigate();

  // Redux Store Variables
  const stallions = useSelector(store => store.stallions);
  const visibleStallions = stallions.filter(stallion=>stallion.visible === true);

  // Fetch Objects from Database on Page Load
  useEffect(() => {
    dispatch({ type: "FETCH_STALLIONS" });
  }, [dispatch]);

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
          </Breadcrumbs>

          {/* <SearchBar/> */}

        </div>

        <div className="gallery-container">
          {visibleStallions.map((stallion) => {
              return (
                <Card className="gallery-card" key={stallion.id} onClick={()=>navigate(`/stallions/${stallion.id}`)}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300px"
                      image={stallion.profile_url? stallion.profile_url: "images/placeholder_profile.png"}
                      alt="placeholder_stallion"
                    />
                    <div className="gallery-card-label">
                      <Typography className="gallery-card-label-text">{stallion.name}</Typography>
                    </div>
                  </CardActionArea>
                </Card>
              )
          })}
        </div>

      </div>
      
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default StallionGallery;