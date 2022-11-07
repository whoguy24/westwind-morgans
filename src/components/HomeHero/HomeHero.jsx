///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../HomeHero/HomeHero.css';

// Import MUI Components
import Typography from '@mui/material/Typography';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function HomeHero() {

  // Render DOM
  return (
    <>

      <div id="home-hero-header">
        <Typography id="home-hero-header-text">100% Old Foundation Ranching Bloodlines</Typography>
      </div>

      <div id="home-hero">
        <img id="home-hero-image" src="/assets/static/home_hero.png" alt="home"/>
        <Typography id="home-hero-caption">
            National Reined<br/>
            Cowhorse Association<br/>
            Open Competition<br/>
            Zane Davis Performance Horses<br/>
            Zane Davis Trainer/Rider<br/>
            Rockin Horse Photography Image
        </Typography>
      </div>

      <div id="home-hero-header-otto">
        <Typography id="home-hero-header-otto-text">Home of Westwind Otto</Typography>
      </div>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default HomeHero;