///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../HomeHero/HomeHero.css';

import Typography from '@mui/material/Typography';

import React, { useEffect } from 'react';

function HomeHero({width}) {

  useEffect(() => {
    setTimeout(() => {;
    }, 3000);
  }, []);

  return (

    <>
      <div id="home-hero-header">
        <Typography id="home-hero-header-text">100% Old Foundation Ranching Bloodlines</Typography>
      </div>
      <div id="home-hero">
        <img id="home-hero-image" src="/images/home_hero.png" alt="home"/>
        { width > 800 ?
          <Typography id="home-hero-caption">
              National Reined<br/>
              Cowhorse Association<br/>
              Open Competition<br/>
              Zane Davis Performance Horses<br/>
              Zane Davis Trainer/Rider<br/>
              Rockin Horse Photography Image
          </Typography>
        :
          <Typography id="home-hero-caption-mobile">
              National Reined<br/>
              Cowhorse Association<br/>
              Open Competition<br/>
              Zane Davis Performance Horses<br/>
              Zane Davis Trainer/Rider<br/>
              Rockin Horse Photography Image
          </Typography>
        }
      </div>
      <div id="home-westwind-otto">
        <Typography id="home-westwind-otto-text">Home of Westwind Otto</Typography>
      </div>
    </>

  );

}

export default HomeHero;