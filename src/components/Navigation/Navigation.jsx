///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../App/App.css';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

    function handleMenuClick(event) {

        if (event.target.id === 'about-button') {
            setAboutMenu(event.currentTarget);
        }
        else if (event.target.id === 'horses-button') {
            setHorsesMenu(event.currentTarget);
        }
        else if (event.target.id === 'home-button') {
            navigate('/home')
        }
        else if (event.target.id === 'mission-button') {
            navigate('/mission')
            handleMenuClose()
        }
        else if (event.target.id === 'testimonials-button') {
            navigate('/testimonials')
            handleMenuClose()
        }
        else if (event.target.id === 'visit-button') {
            navigate('/visit')
            handleMenuClose()
        }
        else if (event.target.id === 'stallions-button') {
            navigate('/stallions_gallery')
            handleMenuClose()
        }
        else if (event.target.id === 'mares-button') {
            navigate('/mares_gallery')
            handleMenuClose()
        }
        else if (event.target.id === 'expecting-button') {
            navigate('/expecting_gallery')
            handleMenuClose()
        }
        else if (event.target.id === 'sales-button') {
            navigate('/sales_gallery')
            handleMenuClose()
        }
        else if (event.target.id === 'social-button') {
            navigate('/social_media')
        }
        else if (event.target.id === 'contact-button') {
            navigate('/contact')
        }

    }

    function handleMenuClose() {
        setAboutMenu(null);
        setHorsesMenu(null);
    }

    // Render DOM
    return (
        
        <div className="navigation-header">

            <img id='home-button' className='navigation-header-logo' src="westwind-logo.jpg" alt="logo" onClick={handleMenuClick}/>

            <Button id='home-button' variant="text" onClick={handleMenuClick}>Home</Button>

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

            <Button id='social-button' variant="text" onClick={handleMenuClick}>Social Media</Button>
            <Button id='contact-button' variant="text" onClick={handleMenuClick}>Contact</Button>

            <Menu id="about-menu" anchorEl={aboutMenu} open={aboutOpen} onClose={handleMenuClose}>
                <MenuItem id='mission-button' onClick={handleMenuClick}>Mission</MenuItem>
                <MenuItem id='testimonials-button' onClick={handleMenuClick}>Testimonials</MenuItem>
                <MenuItem id='visit-button' onClick={handleMenuClick}>Visit</MenuItem>
            </Menu>

            <Menu id="horses-menu" anchorEl={horsesMenu} open={horsesOpen} onClose={handleMenuClose}>
                <MenuItem id='stallions-button' onClick={handleMenuClick}>Stallions</MenuItem>
                <MenuItem id='mares-button' onClick={handleMenuClick}>Mares</MenuItem>
                <MenuItem id='sales-button' onClick={handleMenuClick}>Sales List</MenuItem>
                <MenuItem id='expecting-button' onClick={handleMenuClick}>Expecting 2023</MenuItem>
            </Menu>

        </div>

    );
}

// Export Component Function
export default Navigation;