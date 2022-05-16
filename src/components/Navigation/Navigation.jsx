///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../App/App.css';

import Button from '@mui/material/Button';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Navigation() {

    // Render DOM
    return (
        
        <div className="navigation-header">

            <img className='navigation-header-logo' src="westwind-logo.jpg" alt="logo"/>

            <Button variant="text">Home</Button>
            <Button variant="text">About</Button>
            <Button variant="text">Horses</Button>
            <Button variant="text">Social Media</Button>
            <Button variant="text">Contact</Button>

        </div>

    );
}

// Export Component Function
export default Navigation;