///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Visit/Visit.css';

// Import Custom Components

import GoogleMapReact from 'google-map-react'

import IconButton from '@mui/material/IconButton';
import PlaceIcon from '@mui/icons-material/Place';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Visit() {

  const zoomLevel = 10;

  const location = {
    address: 'Sheridan, Montana',
    lat: 45.4584315,
    lng: -112.2093181,
  }

  return (
    <>

        <div className="map">

          <div className="google-map">

            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCuUUy3gWCkKXiuod-2dby6MDgZ96zlZqE' }}
              defaultCenter={location}
              defaultZoom={zoomLevel}
            >
              <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
              />

            </GoogleMapReact>

          </div>

        </div>

    </>
  );

}

const LocationPin = ({ text }) => (
  <div className="pin">
  <IconButton>
    <PlaceIcon />
  </IconButton>
  <p className="pin-text">{text}</p>
</div>
)

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Visit;