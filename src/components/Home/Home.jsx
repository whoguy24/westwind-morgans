///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Home/Home.css';

import React, { useEffect, useState } from 'react';

import HomeHero from "../HomeHero/HomeHero";
import HomeHorses from "../HomeHorses/HomeHorses";
import HomeFoundation from "../HomeFoundation/HomeFoundation";
import HomeBreeding from "../HomeBreeding/HomeBreeding";

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

    <>
      { width > 800 ?
        <div id="home-container">
          <HomeHero width={width} />
          <HomeHorses width={width} />
          <HomeFoundation width={width} />
          <HomeBreeding width={width} />
        </div>
        :
        <div id="home-container-mobile">
          <HomeHero width={width} />
          <HomeHorses width={width }/>
          <HomeFoundation width={width} />
          <HomeBreeding width={width} />
        </div>
      }
    </>

  );

}

export default Home;