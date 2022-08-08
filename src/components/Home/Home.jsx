///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Home/Home.css';

import { useEffect } from 'react';

import HomeHero from "../HomeHero/HomeHero";
import HomeHorses from "../HomeHorses/HomeHorses";
import HomeFoundation from "../HomeFoundation/HomeFoundation";
import HomeBreeding from "../HomeBreeding/HomeBreeding";

function Home() {

  useEffect(() => {
    setTimeout(() => {;
    }, 3000);
  }, []);

  return (
    <>
      <div id="home-container">
        <HomeHero />
        <HomeHorses />
        <HomeFoundation />
        <HomeBreeding />
      </div>
    </>

  );

}

export default Home;