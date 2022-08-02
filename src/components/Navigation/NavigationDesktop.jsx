///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import "../Navigation/NavigationDesktop.css";

// Import React Modules
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

// Import MUI Modules
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Navigation() {

    const user = useSelector(store => store.user);

    const [aboutMenuActive, setAboutMenuActive] = useState();
    const [horsesMenuActive, setHorsesMenuActive] = useState();

    const navigate = useNavigate();
    
    function handleMenuClick(event) {

        switch(event.currentTarget.id) {
            case "home":
                navigate("/home")
                break;
            case "about":
                setAboutMenuActive(event.currentTarget);
                break;
            case "horses":
                setHorsesMenuActive(event.currentTarget);
                break;
            case "foundation":
                navigate("/foundation")
                break;
            case "testimonials":
                navigate("/testimonials")
                break;
            case "visit":
                navigate("/visit")
                break;
            case "stallions":
                navigate("/stallions")
                break;
            case "mares":
                navigate("/mares")
                break;
            case "breeding":
                navigate("/breeding")
                break;
            case "stock":
                navigate("/stock")
                break;
            case "contact":
                navigate("/contact")
                break;
            case "social":
                window.open("https://www.facebook.com/people/Westwind-Morgans/100063575859271/")
                break;
            default:
                navigate("/home")
        }

        if (event.currentTarget.id != "about" && event.currentTarget.id != "horses") {
            handleMenuClose();
        }

    }

    function handleMenuClose() {
        setAboutMenuActive();
        setHorsesMenuActive()
    }

    // Render DOM
    return (

        <>
            <AppBar id="navigation" position="static">
                <Toolbar >
                    <div id="navigation-group-left">
                        <Button className="navigation-button-home" id="home" variant="text" disableRipple onClick={handleMenuClick}>Westwind Morgans</Button>
                    </div>
                    <div id="navigation-group-right">
                    <Button id="horses" className="navigation-button" aria-controls={horsesMenuActive ? 'horses' : false} aria-haspopup="true" aria-expanded={horsesMenuActive ? 'true' : false} onClick={handleMenuClick}>Horses</Button>
                        <Menu id="horses-menu" disableScrollLock={true} anchorEl={horsesMenuActive} open={Boolean(horsesMenuActive)} onClose={handleMenuClose}>
                        <MenuItem id="stallions" onClick={handleMenuClick}>Stallions</MenuItem>
                            <MenuItem id="mares" onClick={handleMenuClick}>Mares</MenuItem>
                            <MenuItem id="stock" onClick={handleMenuClick}>Stock for Sale</MenuItem>
                        </Menu>
                        <Button id="about" className="navigation-button" aria-controls={aboutMenuActive ? 'about' : false} aria-haspopup="true" aria-expanded={aboutMenuActive ? 'true' : false} onClick={handleMenuClick}>About</Button>
                        <Menu id="about-menu" className="navigation-button-menu" disableScrollLock={true} anchorEl={aboutMenuActive} open={Boolean(aboutMenuActive)} onClose={handleMenuClose} >
                            <MenuItem id="foundation" onClick={handleMenuClick}>Foundation</MenuItem>
                            <MenuItem id="breeding" onClick={handleMenuClick}>Breeding</MenuItem>
                            <MenuItem id="testimonials" onClick={handleMenuClick}>Testimonials</MenuItem>
                            <MenuItem id="visit" onClick={handleMenuClick}>Visit</MenuItem>
                        </Menu>
                        <Button id="contact" className="navigation-button" variant="text" onClick={handleMenuClick}>Contact</Button>
                        { user.id && 
                            <Button id="admin" className="navigation-button" variant="text" onClick={handleMenuClick}>Admin</Button> 
                        }
                        <IconButton id="social" className="navigation-button-social" onClick={handleMenuClick}>
                            <FacebookIcon sx={{ fontSize: 24 }} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>

    );
}

// Export Component Function
export default Navigation;