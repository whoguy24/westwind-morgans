///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../StallionGallery/StallionGallery.css';

// Import Libraries
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

// Import Custom Components
import SearchBar from "../SearchBar/SearchBar";

// Import MUI Components
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function StallionGallery() {

  // Redux Variables
  const dispatch = useDispatch();

  // Redux Store Variables
  const stallions = useSelector(store => store.stallions);

  // Fetch Stallions from Database
  useEffect(() => {
    dispatch({ type: "FETCH_STALLIONS" });
  }, [dispatch]);

  // Render DOM
  return (
    <>

      <div id="stallion-gallery">

        <div id="stallion-gallery-banner">
          <img id="stallion-gallery-banner-image" src="/images/stallion_gallery_banner.png" alt="stallion_gallery"/>
        </div>

        <div id="stallion-gallery-header">
          <Typography id="stallion-gallery-header-text">Stallions</Typography>
        </div>

        <div id="stallion-gallery-toolbar">

          <Breadcrumbs id="stallion-gallery-toolbar-breadcrumbs">
            <NavLink to="/home">Westwind Morgans</NavLink>
            <NavLink to="/stallions">Stallions</NavLink>
          </Breadcrumbs>

          <SearchBar/>

        </div>

        <div id="stallion-gallery-container">
          {stallions.map((stallion) => {
              return (
                <Card className="stallion-gallery-card" key={stallion.id}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300px"
                      image="/images/placeholder_stallion.png"
                      alt="placeholder_stallion"
                    />
                    <div className="stallion-gallery-card-label">
                      <Typography className="stallion-gallery-card-label-text">{stallion.name}</Typography>
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