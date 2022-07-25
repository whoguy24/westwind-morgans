///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Navigation/Navigation.css';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useSelector } from "react-redux";

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Navigation() {

    const nextYear = new Date().getFullYear() + 1

    const user = useSelector(store => store.user);

    const [aboutMenu, setAboutMenu] = useState();
    const [horsesMenu, setHorsesMenu] = useState();

    const [drawerActive, setDrawerActive] = useState(false);

    const [width, setWidth] = useState(document.body.clientWidth);

    const aboutOpen = Boolean(aboutMenu);
    const horsesOpen = Boolean(horsesMenu);

    const navigate = useNavigate();

    window.addEventListener('resize', handleContentSizeChange)

    function handleContentSizeChange() {
        setWidth(document.body.clientWidth)
    }
    
    function handleMenuClick(event) {

        if (event.currentTarget.id === 'about-button') {
            setAboutMenu(event.currentTarget);
        }
        else if (event.currentTarget.id === 'horses-button') {
            setHorsesMenu(event.currentTarget);
        }
        else if (event.currentTarget.id === 'home-button' || event.currentTarget.id === 'home-button-mobile') {
            navigate('/home')
            handleMenuClose()
        }
        else if (event.currentTarget.id === 'mission-button' || event.currentTarget.id === 'mission-button-mobile') {
            navigate('/mission')
            handleMenuClose()
        }
        else if (event.currentTarget.id === 'testimonials-button' || event.currentTarget.id === 'testimonials-button-mobile') {
            navigate('/testimonials')
            handleMenuClose()
        }
        else if (event.currentTarget.id === 'visit-button' || event.currentTarget.id === 'visit-button-mobile') {
            navigate('/visit')
            handleMenuClose()
        }
        else if (event.currentTarget.id === 'stallions-button' || event.currentTarget.id === 'stallions-button-mobile') {
            navigate('/stallions_gallery')
            handleMenuClose()
        }
        else if (event.currentTarget.id === 'mares-button' || event.currentTarget.id === 'mares-button-mobile') {
            navigate('/mares_gallery')
            handleMenuClose()
        }
        else if (event.currentTarget.id === 'expecting-button' || event.currentTarget.id === 'expecting-button-mobile') {
            navigate('/expecting_gallery')
            handleMenuClose()
        }
        else if (event.currentTarget.id === 'sales-button' || event.currentTarget.id === 'sales-button-mobile') {
            navigate('/sales_gallery')
            handleMenuClose()
        }
        else if (event.currentTarget.id === 'social-button' || event.currentTarget.id === 'social-button-mobile') {
            navigate('/social_media')
            handleMenuClose()
        }
        else if (event.currentTarget.id === 'contact-button' || event.currentTarget.id === 'contact-button-mobile') {
            navigate('/contact')
            handleMenuClose()
        }
        else if (event.currentTarget.id === 'admin-button' || event.currentTarget.id === 'admin-button-mobile') {
            navigate('/admin')
            handleMenuClose()
        }
    }

    function handleMenuClose() {
        setAboutMenu(null);
        setHorsesMenu(null);
        setDrawerActive(false)
    }

    // Render DOM
    return (

        <div>

            { width > 750 ?

                <AppBar id="navigation-header" position="static">
                    <Toolbar id="navigation-toolbar">

                        <div id="navigation-group-left">
                            <Button id="home-button" variant="text" onClick={handleMenuClick}>Westwind Morgans</Button>
                        </div>

                        <div id="navigation-group-right">

                            <Button id="about-button" 
                                aria-controls={aboutMenu ? 'about-menu' : false} 
                                aria-haspopup="true" 
                                aria-expanded={aboutMenu ? 'true' : false}
                                onClick={handleMenuClick}
                                // startIcon={<KeyboardArrowDownIcon />}
                            >
                            About
                            </Button>

                            <Button id="horses-button" 
                                aria-controls={horsesMenu ? 'horses-menu' : false} 
                                aria-haspopup="true" 
                                aria-expanded={horsesMenu ? 'true' : false}
                                onClick={handleMenuClick}
                                // startIcon={<KeyboardArrowDownIcon />}
                            >Horses
                            </Button>
                        
                            <Button id="contact-button" variant="text" onClick={handleMenuClick}>Contact</Button>

                            { user.id &&
                                <Button id="admin-button" variant="text" onClick={handleMenuClick}>Admin</Button>
                            }

                            {/* TODO: Link social button to Bryan's Facebook page */}

                            <IconButton id="facebook-button" color="inherit">
                                <FacebookIcon />
                            </IconButton>

                            <Menu id="about-menu" anchorEl={aboutMenu} open={aboutOpen} onClose={handleMenuClose}>
                                <MenuItem id="mission-button" onClick={handleMenuClick}>Mission</MenuItem>
                                <MenuItem id="testimonials-button" onClick={handleMenuClick}>Testimonials</MenuItem>
                                <MenuItem id="visit-button" onClick={handleMenuClick}>Visit</MenuItem>
                            </Menu>

                            <Menu id="horses-menu" anchorEl={horsesMenu} open={horsesOpen} onClose={handleMenuClose}>
                                <MenuItem id="stallions-button" onClick={handleMenuClick}>Stallions</MenuItem>
                                <MenuItem id="mares-button" onClick={handleMenuClick}>Mares</MenuItem>
                                <MenuItem id="sales-button" onClick={handleMenuClick}>Sales List</MenuItem>
                                <MenuItem id="expecting-button" onClick={handleMenuClick}>Expecting {nextYear}</MenuItem>
                            </Menu>

                        </div>

                    </Toolbar>
                </AppBar>

            :

            <div>

                <AppBar id="navigation-header" position="static">

                    <Toolbar id="navigation-toolbar">

                        <div id="navigation-group-left-mobile">
                            <IconButton onClick={()=>setDrawerActive(!drawerActive)}>
                                <MenuIcon />
                            </IconButton>

                        </div>

                        <div id="navigation-group-center-mobile">
                            <Button id="home-button" variant="text" onClick={handleMenuClick}>Westwind Morgans</Button>
                        </div>

                        <div id="navigation-group-right-mobile">

                            {/* TODO: Link social button to Bryan's Facebook page */}

                            <IconButton id="facebook-button" color="inherit">
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

                <List>

                    <ListItem id='home-button-mobile'disablePadding>
                        <ListItemButton  id='home-button-mobile' onClick={handleMenuClick}>
                            <ListItemText primary="Westwind Morgans"/>
                        </ListItemButton>
                    </ListItem>

                    <Divider component="li" />
                    <li>
                        <Typography
                        sx={{ mt: 0.5, ml: 2 }}
                        color="text.secondary"
                        display="block"
                        variant="caption"
                        >
                        About
                        </Typography>
                    </li>

                    <ListItem disablePadding>
                        <ListItemButton id='mission-button-mobile' onClick={handleMenuClick}>
                            <ListItemText primary="Mission" sx={{ ml: 3 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton id='testimonials-button-mobile' onClick={handleMenuClick}>
                            <ListItemText primary="Testimonials" sx={{ ml: 3 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton id='visit-button-mobile' onClick={handleMenuClick}>
                            <ListItemText primary="Visit" sx={{ ml: 3 }} />
                        </ListItemButton>
                    </ListItem>

                    <Divider component="li" />
                    <li>
                        <Typography
                        sx={{ mt: 0.5, ml: 2 }}
                        color="text.secondary"
                        display="block"
                        variant="caption"
                        >
                        Horses
                        </Typography>
                    </li>

                    <ListItem disablePadding>
                        <ListItemButton id='stallions-button-mobile' onClick={handleMenuClick}>
                            <ListItemText primary="Stallions" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton id='mares-button-mobile' onClick={handleMenuClick}>
                            <ListItemText primary="Mares" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton id='sales-button-mobile' onClick={handleMenuClick}>
                            <ListItemText primary="Sales List" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton id='expecting-button-mobile' onClick={handleMenuClick}>
                            <ListItemText primary={`Expecting ${nextYear}`} sx={{ ml: 2 }} />
                        </ListItemButton>
                    </ListItem>

                    <Divider />

                    <ListItem disablePadding>
                        <ListItemButton id='contact-button-mobile' onClick={handleMenuClick}>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton id='admin-button-mobile' onClick={handleMenuClick}>
                            <ListItemText primary="Admin" />
                        </ListItemButton>
                    </ListItem>

                </List>

            </SwipeableDrawer>

            </div>

            }

        </div>

    );
}

// Export Component Function
export default Navigation;