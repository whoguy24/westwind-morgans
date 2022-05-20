///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../App/App.css';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
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

    const [aboutMenu, setAboutMenu] = useState();
    const [horsesMenu, setHorsesMenu] = useState();

    const [drawerActive, setDrawerActive] = useState(false);

    const [height, setHeight] = useState(document.body.clientHeight);
    const [width, setWidth] = useState(document.body.clientWidth);

    const aboutOpen = Boolean(aboutMenu);
    const horsesOpen = Boolean(horsesMenu);

    const navigate = useNavigate();

    window.addEventListener('resize', handleContentSizeChange)

    function handleContentSizeChange() {
        setHeight(document.body.clientHeight)
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

    }

    function handleMenuClose() {
        setAboutMenu(null);
        setHorsesMenu(null);
        setDrawerActive(false)
    }

    // Render DOM
    return (

        <div>

            { width > 700 ?
            
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
                        aria-controls={horsesMenu ? 'horses-menu' : false} 
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

                :

                <div className="navigation-header-mobile">
                    <img id='home-button' className='navigation-header-logo' src="westwind-logo.jpg" alt="logo" onClick={handleMenuClick}/>

                    <IconButton className='navigation-menu-button' onClick={()=>setDrawerActive(!drawerActive)}>
                            <MenuIcon className='navigation-menu-button-icon'/>
                    </IconButton>

                </div>

            }

            <Drawer variant="temporary" open={drawerActive} onClose={()=>setDrawerActive(false)} anchor={'bottom'}>

                <List className='navigation-menu-list'>

                    <ListItem id='home-button-mobile'disablePadding>
                        <ListItemButton  id='home-button-mobile' onClick={handleMenuClick}>
                            <ListItemText primary="Home"/>
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
                            <ListItemText primary="Expecting 2023" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </ListItem>

                    <Divider />

                    <ListItem disablePadding>
                        <ListItemButton id='social-button-mobile' onClick={handleMenuClick}>
                            <ListItemText primary="Social Media" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton id='contact-button-mobile' onClick={handleMenuClick}>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </ListItem>

                </List>

            </Drawer>


        </div>

    );
}

// Export Component Function
export default Navigation;