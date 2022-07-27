///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import "../Navigation/NavigationMobile.css";

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
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Navigation() {

    const user = useSelector(store => store.user);

    const [drawerActive, setDrawerActive] = useState(false);

    const navigate = useNavigate();
    
    function handleMenuClick(event) {
        switch(event.currentTarget.id) {
            case "menu":
                setDrawerActive(true)
                break;
            case "home":
                navigate("/home")
                break;
            case "social":
                window.open("https://www.facebook.com/people/Westwind-Morgans/100063575859271/")
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
            case "admin":
                navigate("/admin")
                break;
            default:
                navigate("/home")
        }
        if (event.currentTarget.id !== "menu") {
            setDrawerActive(false)
        }
    }

    // Render DOM
    return (

        <div>

            <AppBar id="navigation-mobile" position="static">
                <Toolbar>

                    <div id="navigation-mobile-group-left">
                        <IconButton id="menu" className="navigation-mobile-button-menu" onClick={()=>setDrawerActive(!drawerActive)}>
                            <MenuIcon />
                        </IconButton>
                    </div>

                    <div id="navigation-mobile-group-center">
                        <Button id="home" className="navigation-mobile-button-home" variant="text" disableRipple onClick={handleMenuClick}>Westwind Morgans</Button>
                    </div>

                    <div id="navigation-mobile-group-right">
                        <IconButton id="social" className="navigation-mobile-button-social" onClick={handleMenuClick}>
                            <FacebookIcon />
                        </IconButton>
                    </div>
                    
                </Toolbar>
            </AppBar>
        
            <SwipeableDrawer 
                variant="temporary" 
                open={drawerActive} 
                onOpen={()=>setDrawerActive(true)} 
                onClose={()=>setDrawerActive(false)} 
                anchor={'bottom'}
            >
                <List id="navigation-mobile-menu-list">

                    <ListItem disablePadding >
                        <ListItemButton id="home" onClick={handleMenuClick}>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>

                    <Divider className="navigation-mobile-divider" />

                    <ListItem disablePadding>
                        <ListItemButton id="foundation" onClick={handleMenuClick}>
                            <ListItemText primary="Why Foundation" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton id="testimonials" onClick={handleMenuClick}>
                            <ListItemText primary="Testimonials" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton id="visit" onClick={handleMenuClick}>
                            <ListItemText primary="Visit" />
                        </ListItemButton>
                    </ListItem>

                    <Divider className="navigation-mobile-divider" />

                    <ListItem disablePadding>
                        <ListItemButton id="mares" onClick={handleMenuClick}>
                            <ListItemText primary="Mares" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton id="stallions" onClick={handleMenuClick}>
                            <ListItemText primary="Stallions" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton id="breeding" onClick={handleMenuClick}>
                            <ListItemText primary="Breeding" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton id="stock" onClick={handleMenuClick}>
                            <ListItemText primary="Stock for Sale" />
                        </ListItemButton>
                    </ListItem>

                    <Divider className="navigation-mobile-divider" />

                    <ListItem disablePadding>
                        <ListItemButton id="contact" onClick={handleMenuClick}>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </ListItem>

                    { user.id &&
                        <ListItem disablePadding>
                            <ListItemButton id="admin" onClick={handleMenuClick}>
                                <ListItemText primary="Admin" />
                            </ListItemButton>
                        </ListItem>
                    }

                </List>

            </SwipeableDrawer>

        </div>

    );
}

// Export Component Function
export default Navigation;