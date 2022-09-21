///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../GoogleMaps/GoogleMaps.css';

// Import Custom Components
import GoogleMapsPin from "../GoogleMapsPin/GoogleMapsPin";

import GoogleMapReact from 'google-map-react'

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function GoogleMaps({location, zoomLevel}) {

  return (
    <>

      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCuUUy3gWCkKXiuod-2dby6MDgZ96zlZqE' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <GoogleMapsPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />

      </GoogleMapReact>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default GoogleMaps;