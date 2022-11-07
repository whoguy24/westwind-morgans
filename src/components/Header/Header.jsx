///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import './Header.css';

// Import MUI Components
import Typography from '@mui/material/Typography';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Header({style, title}) {

  return (
    
    <>

    { style === "content" &&
      <div id="header-content">
        <Typography id="header-content-text">{title}</Typography>
      </div>
    }

    { style === "banner" &&
      <div id="header-banner">
        <Typography id="header-banner-text">{title}</Typography>
      </div>
    }

    { style === "subheading" &&
      <div id="header-subheading">
        <div className="header-subheading-divider"/>
        <Typography id="header-subheading-text">{title}</Typography>
        <div className="header-subheading-divider"/>
      </div>
    }

    </>

  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Header;