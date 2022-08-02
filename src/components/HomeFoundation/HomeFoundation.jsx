///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../HomeFoundation/HomeFoundation.css';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

function HomeFoundation({width}) {

  const navigate = useNavigate();

  return (

    <>
      <div id="home-foundation-header">
        <Typography id="home-foundation-header-text">Foundation</Typography>
      </div>

      <div id="home-foundation">

      { width > 800 ?

        <div id="home-foundation-container">
          <img id="home-foundation-image" src="/images/home_foundation.png" alt="home"/>
          <div>
            <Typography id="home-foundation-text">
                Our foundation stock goes back to many of 
                the historic Morgan stock horses 
                from early ranches of Kansas, Texas, 
                Oklahoma, and the Southwest.<br/><br/>
                Westwind Morgans is breeding what has come 
                to be known as the Western Working Morgan Horse. 
                Our breeding is a proven nick of bloodlines, with 
                sires going back to the Warner Angus Ranch of Dodge City, 
                Kansas and broodmares from the Sweet's 
                family in Jewell County Kansas.<br/><br/>
            </Typography>
            <Button id="home-foundation-button" onClick={()=>navigate("/foundation")}>Read More</Button>
          </div>
        </div>

        :

        <div id="home-foundation-container-mobile">
          <img id="home-foundation-image-mobile" src="/images/home_foundation.png" alt="home"/>
          <div>
            <Typography id="home-foundation-text-mobile">
                Our foundation stock goes back to many of 
                the historic Morgan stock horses 
                from early ranches of Kansas, Texas, 
                Oklahoma, and the Southwest.<br/><br/>
                Westwind Morgans is breeding what has come 
                to be known as the Western Working Morgan Horse. 
                Our breeding is a proven nick of bloodlines, with 
                sires going back to the Warner Angus Ranch of Dodge City, 
                Kansas and broodmares from the Sweet's 
                family in Jewell County Kansas.<br/><br/>
            </Typography>
            <Button id="home-foundation-button-mobile" onClick={()=>navigate("/foundation")}>Read More</Button>
          </div>
        </div>

      }

      </div>
    </>

  );

}

export default HomeFoundation;