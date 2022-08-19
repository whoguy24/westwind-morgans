///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Placeholder/Placeholder.css';

import { NavLink } from 'react-router-dom';

// Import MUI Components
import Typography from '@mui/material/Typography';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Placeholder() {

  const facebookLink = "https://www.facebook.com/people/Westwind-Morgans/100063575859271/";

  // Render DOM
  return (
    <>

      <div id="placeholder">

        <Typography className="placeholder-font-v1">Westwind Morgans</Typography>
        <Typography className="placeholder-font-v2">100% Old Foundation Ranching Bloodlines</Typography>

        <div className="placeholder-column-container">

          <div className="placeholder-column1">
            <img className="placeholder-image" src="images/placeholder.png" alt="westwind_otto.png" />
          </div>

          <div className="placeholder-column2">

            <div className="placeholder-column2-container">

              <Typography className="placeholder-font-v3">Westwind Otto</Typography>
              <Typography className="placeholder-font-v4">
                <a className="placeholder-font-v4" href="https://www.allbreedpedigree.com/westwind+otto" target="_blank">Sweets Baybarry X Westwind Eyelash</a>
              </Typography>

              <Typography className="placeholder-font-v5">2016 Palomino Stallion</Typography>
              <Typography className="placeholder-font-v6">Joining the Ranks of</Typography>
              <Typography className="placeholder-font-v7">Lifetime Earners</Typography>
              <Typography  className="placeholder-font-v6">
                In National Open Reined<br/>
                Cowhose Competition<br/>
                With Zane Davis
              </Typography>

            </div>

          </div>

        </div>

        <Typography className="placeholder-font-v9">Performance Horse Prospects and Young Stock Available</Typography>
        <Typography className="placeholder-font-v6">Bryan Blatt Sheridan Montana 406 451 9311</Typography>
        <a className="placeholder-font-v6" href="mailto:bblat@westwindmorgans.com">bblatt@westwindmorgans.com</a>
        <Typography className="placeholder-font-v8">Photo by Rocking Horse Photography</Typography>
        <Typography className="placeholder-font-v7">Complete Website Coming Soon!</Typography>
        <a className="placeholder-font-v10" href={facebookLink} target="_blank">Westwind Morgans @Facebook</a>

      </div>
      
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Placeholder;