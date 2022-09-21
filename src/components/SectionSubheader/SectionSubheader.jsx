///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../SectionHeader/SectionHeader.css';

// Import Custom Components

// Import MUI Components
import Typography from '@mui/material/Typography';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function SectionHeader({style, title}) {

  return (
    <>

    { style === "content" &&
      <div className="section-header">
        <Typography className="section-header-text">{title}</Typography>
      </div>
    }

    { style === "banner" &&
      <div className="section-header-banner">
        <Typography className="section-header-banner-text">{title}</Typography>
      </div>
    }

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default SectionHeader;