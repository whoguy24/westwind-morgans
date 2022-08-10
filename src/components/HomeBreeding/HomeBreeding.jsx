///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../HomeBreeding/HomeBreeding.css';

// Import Libraries
import { useNavigate } from 'react-router-dom';

// Import MUI Components
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function HomeBreeding() {

  // React Router Variables
  const navigate = useNavigate();

  // Render DOM
  return (
    <>

      <div id="home-breeding-header">
        <Typography id="home-breeding-header-text">Breeding</Typography>
      </div>

      <div id="home-breeding">

        <div id="home-breeding-container">
          
          <img id="home-breeding-image" src="/images/home_breeding.png" alt="home"/>

          <div id="home-breeding-info">
            <Typography id="home-breeding-text">
              We strive to carry on the tradition of the working cow horse 
              which the Warner Angus Ranch has produced for several generations 
              and is carried on by the family to this day.<br/><br/>
              If you are looking for a Morgan horse that goes back to the 
              original stock horse of the West you have come to the right place.<br/><br/>
            </Typography>
            
            <Button className="form-button" onClick={()=>navigate("/breeding")}>Read More</Button>
          </div>

        </div>

      </div>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default HomeBreeding;