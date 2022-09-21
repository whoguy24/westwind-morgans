///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Visit/Visit.css';

// Import Custom Components

import IconButton from '@mui/material/IconButton';
import PlaceIcon from '@mui/icons-material/Place';

import GoogleMaps from "../GoogleMaps/GoogleMaps";

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Visit() {

  const location = {
    address: 'Sheridan, Montana',
    lat: 45.4584315,
    lng: -112.2093181,
  }

  return (
    <>

        <div className="map">
          <div className="google-map">
            <GoogleMaps location={location} zoomLevel={10} />
          </div>
        </div>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Visit;