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
import HorseCard from "../HorseCard/HorseCard";

// Import MUI Components
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function HorseGallery({type, title}) {

  // Redux Variables
  const dispatch = useDispatch();

  // React Router Variables
  const navigate = useNavigate();

  // Fetch Objects from Database on Page Load
  useEffect(() => {
    dispatch({ type: "FETCH_HORSES", route:type });
    window.scrollTo(0, 0);
  }, [type]);

  // Redux Store Variables
  const horses = useSelector(store => store.horses);
  const visibleHorses = horses.filter(horse=>horse.visible === true);

  // Render DOM
  return (
    <>

      <div className="content-container">

        <div className="content-banner">
          <img className="content-banner-image" src={`/assets/static/banner_${type}.png`}/>
        </div>

        <div className="section-header-banner">
          <Typography className="section-header-banner-text">{title}</Typography>
        </div>

        <div className="content-toolbar">
            <Breadcrumbs className="content-toolbar-breadcrumbs">
              <NavLink to="/home">Westwind Morgans</NavLink>
              <NavLink to={`/${type}`}>{title}</NavLink>
            </Breadcrumbs>
          {/* <SearchBar/> */}
        </div>

        <div className="gallery-container">
          {visibleHorses.map((horse) => {
              return (
                <HorseCard key={horse.id} horse={horse}/>
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