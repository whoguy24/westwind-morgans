///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../HomeBreeding/HomeBreeding.css';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function HomeBreeding() {

  return (

    <>
      <div id="home-breeding-header">
        <Typography id="home-breeding-header-text">Breeding</Typography>
      </div>
      <div id="home-breeding">
        <div id="home-breeding-container">
          <img id="home-breeding-image" src="/images/home_breeding.png" alt="home"/>
          <div>
            <Typography id="home-breeding-text">
            We strive to carry on the tradition of the working cow horse 
            which the Warner Angus Ranch has produced for several generations 
            and is carried on by the family to this day.<br/><br/>
            If you are looking for a Morgan horse that goes back to the 
            original stock horse of the West you have come to the right place. 
            These bloodlines have competed on a national level in carriage driving 
            and some of the most prestigious events in the sport.<br/><br/>
            </Typography>
            <Button id="home-breeding-button">Read More</Button>
          </div>
        </div>
      </div>
    </>

  );

}

export default HomeBreeding;