///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import './HorseGallery.css';

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

function HorseGallery({category}) {

  // Redux Variables
  const dispatch = useDispatch();

  // React Router Variables
  const navigate = useNavigate();

  // Fetch Objects from Database on Page Load
  useEffect(() => {
    dispatch({ type: "FETCH_HORSES", route:category });
  }, [category]);

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

  // Redux Store Variables
  const horses = useSelector(store => store.horses);
  const visibleHorses = horses.filter(horse=>horse.visible === true);

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
              <NavLink to={`/${category}`}>{category_title}</NavLink>
            </Breadcrumbs>

          {/* <SearchBar/> */}

        </div>

        <div className="gallery-container">
          {visibleHorses.map((horse) => {
              return (
                <Card className="gallery-card" key={horse.id} onClick={()=>navigate(`/${category}/${horse.id}`)}>
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
      </div>
      
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default HorseGallery;