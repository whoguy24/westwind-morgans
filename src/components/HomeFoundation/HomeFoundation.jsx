///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../HomeFoundation/HomeFoundation.css';

// Import Libraries
import { useNavigate } from 'react-router-dom';

// Import MUI Components
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function HomeFoundation() {

  // React Router Variables
  const navigate = useNavigate();

  // Render DOM
  return (
    <>

      <div id="home-foundation-header">
        <Typography id="home-foundation-header-text">Why Foundation</Typography>
      </div>

      <div id="home-foundation">

        <div id="home-foundation-container">
          
          <img id="home-foundation-image" src="/images/home_foundation.png" alt="home"/>

          <div id="home-foundation-info">
            <Typography id="home-foundation-text">
                Our foundation stock goes back to many of 
                the historic Morgan stock horses 
                from early ranches of Kansas, Texas, 
                Oklahoma, and the Southwest.<br/><br/>
                Our breeding is a proven nick of bloodlines, with 
                sires going back to the Warner Angus Ranch of Dodge City, 
                Kansas and broodmares from the Sweet's 
                family in Jewell County Kansas.<br/><br/>
            </Typography>
            <Button className="form-button" onClick={()=>navigate("/foundation")}>Read More</Button>
          </div>

        </div>


      </div>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default HomeFoundation;