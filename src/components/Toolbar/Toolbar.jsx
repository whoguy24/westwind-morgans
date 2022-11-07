///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Toolbar/Toolbar.css';

// Import Libraries
import { NavLink } from 'react-router-dom';

// Import MUI Components
import Breadcrumbs from '@mui/material/Breadcrumbs';

// Import Custom Components

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Toolbar({type, title, horse}) {

  return (
    <>

        <div id="toolbar">
          <Breadcrumbs id="toolbar-breadcrumbs">
            <NavLink to="/home">Westwind Morgans</NavLink>
            <NavLink to={`/${type}`}>{title}</NavLink>
            { horse && <NavLink to={`/${horse.type}/${horse.id}`}>{horse.name}</NavLink> }
          </Breadcrumbs>
        </div>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Toolbar;