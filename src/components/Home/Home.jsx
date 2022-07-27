///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Home/Home.css';

import React, { useState } from 'react';

function Home() {

  const [width, setWidth] = useState(document.body.clientWidth);

  window.addEventListener('resize', handleContentSizeChange)

  function handleContentSizeChange() {
      setWidth(document.body.clientWidth)
  }

  return (

    <div id="home-container">

      <div>
        <span id="home-header">100% Old Foundation Ranching Bloodlines</span>
      </div>

      <div>
        <div>
          <img src="/images/home_rider.png" alt="home" id="home-image"/>
          {/* <span id="home-caption">
              National Reined<br/>
              Cowhorse Association<br/>
              Open Competition<br/>
              Zane Davis Performance Horses<br/>
              Zane Davis Trainer/Rider
          </span> */}
        </div>
      </div>

      <div>
        <span id="home-label-otto">WestWind Otto</span>
      </div>

      <div>
        
      </div>

    </div>

  );

}

export default Home;