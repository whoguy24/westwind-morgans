///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Visit/Visit.css';

// Import Custom Components
import GoogleMaps from "../GoogleMaps/GoogleMaps";

// Import MUI Components
import Typography from '@mui/material/Typography';

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

      <div id="home-container">

        <div className="content-banner">
          <img className="content-banner-image" src={`/assets/static/banner_stallions.png`}/>
        </div>

        <div className="section-header">
          <Typography className="section-header-text">Visit Us</Typography>
        </div>

        <div id="visit">

          <div id="visit-container">

            <div id="visit-description">
              <Typography className="visit-description-text">
                  Habitant morbi tristique senectus et netus et malesuada. 
                  Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. 
                  Augue lacus viverra vitae congue eu consequat ac. 
                  Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. 
                  Augue lacus viverra vitae congue eu consequat ac.<br/><br/>
                  Address Line 1<br/>
                  Address Line 2<br/>
                  City,  ST Zipcode<br/><br/>
                  Habitant morbi tristique senectus et netus et malesuada. 
                  Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. 
                  Augue lacus viverra vitae congue eu consequat ac.
              </Typography>

            </div>

            <div id="visit-google-map">
              <GoogleMaps location={location} zoomLevel={8} />
            </div>

          </div>

        </div>

      </div>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Visit;