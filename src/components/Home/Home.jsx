///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Home/Home.css';

import Typography from '@mui/material/Typography';

import React, { useEffect, useState } from 'react';

function Home() {

  const [width, setWidth] = useState(document.body.clientWidth);

  window.addEventListener('resize', handleContentSizeChange)

  function handleContentSizeChange() {
      setWidth(document.body.clientWidth)
  }

  useEffect(() => {
    setTimeout(() => {;
    }, 3000);
  }, []);

  return (

    <div id="home-container">

      <div id="home-header">
        <Typography id="home-header-text">100% Old Foundation Ranching Bloodlines</Typography>
      </div>

      <div id="home-hero">
          <img id="home-hero-image" src="/images/home_hero.png" alt="home"/>
          <Typography id="home-hero-caption">
              National Reined<br/>
              Cowhorse Association<br/>
              Open Competition<br/>
              Zane Davis Performance Horses<br/>
              Zane Davis Trainer/Rider<br/>
              Rockin Horse Photography Image
          </Typography>
      </div>

      <div id="home-westwind-otto">
        <Typography id="home-westwind-otto-text">Home of Westwind Otto</Typography>
      </div>

      <div id="home-header-horses">
      </div>

    </div>

  );

}

export default Home;