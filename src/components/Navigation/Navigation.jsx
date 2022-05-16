///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../App/App.css';

import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Navigation() {

    const [aboutMenu, setAboutMenu] = useState();
    const [horsesMenu, setHorsesMenu] = useState();

    const aboutOpen = Boolean(aboutMenu);
    const horsesOpen = Boolean(horsesMenu);

    function handleMenuClick(event) {
        if (event.target.id === 'about-button') {
            setAboutMenu(event.currentTarget);
        }
        else if (event.target.id === 'horses-button') {
            setHorsesMenu(event.currentTarget);
        }
    }

    function handleMenuClose() {
        setAboutMenu(null);
        setHorsesMenu(null);
    }

    // Render DOM
    return (
        
        <div className="navigation-header">

            <img className='navigation-header-logo' src="westwind-logo.jpg" alt="logo"/>

            <Button variant="text">Home</Button>

            <Button id="about-button" 
                aria-controls={aboutMenu ? 'about-menu' : false} 
                aria-haspopup="true" 
                aria-expanded={aboutMenu ? 'true' : false}
                onClick={handleMenuClick}
            >About</Button>

            <Button id="horses-button" 
                aria-controls={horsesMenu ? 'about-menu' : false} 
                aria-haspopup="true" 
                aria-expanded={horsesMenu ? 'true' : false}
                onClick={handleMenuClick}
            >Horses</Button>


            <Button variant="text">Social Media</Button>
            <Button variant="text">Contact</Button>

            <Menu id="about-menu" anchorEl={aboutMenu} open={aboutOpen} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>Mission</MenuItem>
                <MenuItem onClick={handleMenuClose}>Testimonials</MenuItem>
                <MenuItem onClick={handleMenuClose}>Visit</MenuItem>
            </Menu>

            <Menu id="horses-menu" anchorEl={horsesMenu} open={horsesOpen} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>Stallions</MenuItem>
                <MenuItem onClick={handleMenuClose}>Mares</MenuItem>
                <MenuItem onClick={handleMenuClose}>Sales List</MenuItem>
                <MenuItem onClick={handleMenuClose}>Expecting 2023</MenuItem>
            </Menu>

        </div>

    );
}

// Export Component Function
export default Navigation;