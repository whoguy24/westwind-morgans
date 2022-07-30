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
        <Typography id="home-header-headline">100% Old Foundation Ranching Bloodlines</Typography>
      </div>

      <div id="home-hero">
        
          <img id="home-hero-image" src="/images/home_hero.png" alt="home"/>



          {/* <span id="home-caption">
              National Reined<br/>
              Cowhorse Association<br/>
              Open Competition<br/>
              Zane Davis Performance Horses<br/>
              Zane Davis Trainer/Rider
          </span> */}



      </div>

      {/* <div>
        <Typography id="test-type">Here is some Text</Typography>
      </div> */}

      {/* <div>
        <span id="home-label-otto">Westwind Otto</span>
      </div> */}

    </div>

  );

}

export default Home;