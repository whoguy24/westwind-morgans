///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../StallionGallery/StallionGallery.css';

// Import Libraries
import { useNavigate } from 'react-router-dom';

// Import MUI Components
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function StallionGallery() {

  // React Router Variables
  const navigate = useNavigate();

  // Render DOM
  return (
    <>

      <div id="stallion-gallery">

        <div id="stallion-gallery-banner">
          <img id="stallion-gallery-banner-image" src="/images/stallion_gallery_banner.png" alt="stallion_gallery"/>
        </div>

        <div id="stallion-gallery-header">
          <Typography id="stallion-gallery-header-text">Stallions</Typography>
        </div>

        <div id="stallion-gallery-toolbar">

          <div id="stallion-gallery-breadcrumbs">
            <Breadcrumbs>
              <Link underline="hover" onClick={()=>navigate("/home")}>
                Westwind Morgans
              </Link>

              <Typography>
                Stallions
              </Typography>

            </Breadcrumbs>
          </div>

          <div>
          </div>

        </div>

      </div>
      
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default StallionGallery;