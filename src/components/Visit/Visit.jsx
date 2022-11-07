///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Visit/Visit.css';

// Import Custom Components
import GoogleMaps from "../GoogleMaps/GoogleMaps";
// import SectionHeader from "../Header/Header";
// import SectionBanner from "../SectionBanner/SectionBanner";
// import SectionSubheader from "../SectionSubheader/SectionSubheader";

// Import MUI Components
import Typography from '@mui/material/Typography';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Visit() {

  const location = {
    address: 'Sheridan, Montana',
    lat: 45.4584315,
    lng: -112.2093181
  }

  return (
    <>

        {/* <SectionBanner image="banner_stallions"/>
        <SectionHeader style="banner" title="Visit Us"/>

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
                  City,  ST Zipcode
              </Typography>
            </div>

            <div id="visit-google-map">
              <GoogleMaps location={location} zoomLevel={8} />
            </div>

          </div>

        </div>

        <SectionSubheader title="Explore"/>

        <div id="visit-locations">

          <div className="visit-locations-column"></div>

          <div className="visit-locations-column"></div>
          
          <div className="visit-locations-column"></div>

        </div> */}

        

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Visit;