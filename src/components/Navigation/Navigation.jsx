///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import "../Navigation/Navigation.css";

import { useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

// Import MUI Modules
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Navigation() {

    const [aboutMenuActive, setAboutMenuActive] = useState();
    const [horsesMenuActive, setHorsesMenuActive] = useState();
    const [drawerActive, setDrawerActive] = useState(false);
    const [width, setWidth] = useState(document.body.clientWidth);

    const user = useSelector(store => store.user);

    window.addEventListener('resize', handleContentSizeChange)

    function handleContentSizeChange() {
        setWidth(document.body.clientWidth)
    }

    const navigate = useNavigate();
    
    function handleMenuClick(path) {

        console.log(path);

        switch(path) {
            case "home":
                navigate("/home")
                break;
            case "about":
                setAboutMenuActive(event.target);
                break;
            case "horses":
                setHorsesMenuActive(event.target);
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

        if (path != "about" && path != "horses") {
            handleMenuClose();
        }

        if (path !== "menu") {
            setDrawerActive(false)
        }

    }

    function handleMenuClose() {
        setAboutMenuActive();
        setHorsesMenuActive()
    }


    // Render DOM
    return (
        <>

            { width > 800 ?

                <AppBar id="navigation" position="static">
                    <Toolbar >



                        <div id="navigation-group-left">
                            <Button 
                                id="navigation-button-home" 
                                variant="text" 
                                disableRipple 
                                onClick={(path)=>handleMenuClick("home")}
                            >
                            Westwind Morgans
                            </Button>
                        </div>


                        <div id="navigation-group-right">

                            <Button 
                                className="navigation-button" 
                                aria-controls={ horsesMenuActive ? 'horses' : false } 
                                aria-haspopup="true" 
                                aria-expanded={ horsesMenuActive ? 'true' : false } 
                                onClick={(path)=>handleMenuClick("horses")}
                            >
                            Horses
                            </Button>
                            
                            <Menu 
                                id="navigation-menu-horses" 
                                disableScrollLock={true} 
                                anchorEl={horsesMenuActive} 
                                open={Boolean(horsesMenuActive)} 
                                onClose={handleMenuClose}
                            >
                            <MenuItem onClick={(path)=>handleMenuClick("stallions")}>Stallions</MenuItem>
                                <MenuItem onClick={(path)=>handleMenuClick("mares")}>Mares</MenuItem>
                                <MenuItem onClick={(path)=>handleMenuClick("stock")}>Stock for Sale</MenuItem>
                            </Menu>

                            <Button 
                                className="navigation-button" 
                                aria-controls={ aboutMenuActive ? 'about' : false } 
                                aria-haspopup="true" 
                                aria-expanded={ aboutMenuActive ? 'true' : false } 
                                onClick={(path)=>handleMenuClick("about")}
                            >About
                            </Button>
                            
                            <Menu 
                                id="navigation-menu-about" 
                                disableScrollLock={true} 
                                anchorEl={aboutMenuActive} 
                                open={Boolean(aboutMenuActive)} 
                                onClose={handleMenuClose} 
                            >
                                <MenuItem onClick={(path)=>handleMenuClick("foundation")}>Foundation</MenuItem>
                                <MenuItem onClick={(path)=>handleMenuClick("breeding")}>Breeding</MenuItem>
                                <MenuItem onClick={(path)=>handleMenuClick("testimonials")}>Testimonials</MenuItem>
                                <MenuItem onClick={(path)=>handleMenuClick("visit")}>Visit</MenuItem>
                            </Menu>

                            <Button 
                                className="navigation-button" 
                                variant="text" 
                                onClick={handleMenuClick}
                            >Contact
                            </Button>
                            
                            { user.id && 
                                <Button 
                                    className="navigation-button" 
                                    variant="text" 
                                    onClick={(path)=>handleMenuClick("admin")}
                                >
                                Admin
                                </Button> 
                            }

                            <IconButton id="navigation-button-social" href="https://www.facebook.com/people/Westwind-Morgans/100063575859271/" target="_blank">
                                <FacebookIcon sx={{ fontSize: 24 }} />
                            </IconButton>

                        </div>

                    </Toolbar>
                </AppBar>
            
            :

            <></>

                // <AppBar id="navigation" position="static">
                //     <Toolbar>

                //         <div id="navigation-group-left">
                //             <IconButton id="navigation-button-menu" onClick={()=>setDrawerActive(!drawerActive)}>
                //                 <MenuIcon />
                //             </IconButton>
                //         </div>

                //         <div id="navigation-group-center">
                //             <Button id="home" className="navigation-button-home" variant="text" disableRipple onClick={handleMenuClick}>Westwind Morgans</Button>
                //         </div>

                //         <div id="navigation-group-right">
                //             <IconButton id="social" className="navigation-button-social" onClick={handleMenuClick}>
                //                 <FacebookIcon />
                //             </IconButton>
                //         </div>
                        
                //     </Toolbar>
                // </AppBar>
        
            }

            {/* <SwipeableDrawer 
                variant="temporary" 
                open={drawerActive} 
                onOpen={()=>setDrawerActive(true)} 
                onClose={()=>setDrawerActive(false)} 
                anchor={'bottom'}
            >
                <List id="navigation-menu-list">

                    <ListItem disablePadding >
                        <ListItemButton id="home" onClick={handleMenuClick}>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>

                    <Divider className="navigation-divider" />

                    <ListItem disablePadding>
                        <ListItemButton id="stallions" onClick={handleMenuClick}>
                            <ListItemText primary="Stallions" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton id="mares" onClick={handleMenuClick}>
                            <ListItemText primary="Mares" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton id="stock" onClick={handleMenuClick}>
                            <ListItemText primary="Stock for Sale" />
                        </ListItemButton>
                    </ListItem>

                    <Divider className="navigation-divider" />

                    <ListItem disablePadding>
                        <ListItemButton id="foundation" onClick={handleMenuClick}>
                            <ListItemText primary="Foundation" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton id="breeding" onClick={handleMenuClick}>
                            <ListItemText primary="Breeding" />
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

                    <Divider className="navigation-divider" />

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

            </SwipeableDrawer> */}

        </>
    );
}

// Export Component Function
export default Navigation;