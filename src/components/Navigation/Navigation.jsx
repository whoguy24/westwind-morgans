///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import "../Navigation/Navigation.css";

// Import Libraries
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

// Import Custom Components
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";

// Import MUI Components
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Navigation() {

    // React Router Variables
    const navigate = useNavigate();

    // State Variables
    const [aboutMenuActive, setAboutMenuActive] = useState();
    const [horsesMenuActive, setHorsesMenuActive] = useState();
    const [drawerActive, setDrawerActive] = useState(false);
    const [width, setWidth] = useState(document.body.clientWidth);

    // Redux Store Variables
    const user = useSelector(store => store.user);

    // Misc Variables
    const facebookLink = "https://www.facebook.com/people/Westwind-Morgans/100063575859271/";

    // Event Listener for Responsive Rendering
    window.addEventListener('resize', handleViewportChange)

    // Update State On Viewport Size Change
    function handleViewportChange() {
        setWidth(document.body.clientWidth)
    }

    // Navigate to Page on Button Click
    function handleMenuClick(path) {
        switch(path) {
            case "home":
                navigate("/home")
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
                navigate("/stock_for_sale")
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
        handleMenuClose();
        setDrawerActive(false);
    }

    // Close Popup Navigation Menu
    function handleMenuClose() {
        setAboutMenuActive();
        setHorsesMenuActive()
    }


    // Render DOM
    return (
        <>
            { width > 800 ?
                <>

                    {/* 
                    
                    ////////////////////////////////////
                    /// RENDER DOM - LARGE / DESKTOP ///
                    ////////////////////////////////////
                    
                    */}

                    <AppBar id="navigation" position="static">
                        <Toolbar >

                            <div id="navigation-group-left">
                                <Button 
                                    className="navigation-button-home"
                                    variant="text" 
                                    disableRipple 
                                    onClick={()=>navigate("/home")}
                                    >
                                    Westwind Morgans
                                </Button>
                            </div>

                            <div id="navigation-group-right">

                                {/* HORSES BUTTON & MENU */}
                                
                                <Button 
                                    className="navigation-button"
                                    aria-controls={ horsesMenuActive ? 'horses' : false } 
                                    aria-haspopup="true" 
                                    aria-expanded={ horsesMenuActive ? 'true' : false } 
                                    onClick={()=>setHorsesMenuActive(event.target)}
                                    >
                                    Horses
                                </Button>

                                <Menu 
                                    disableScrollLock={true} 
                                    anchorEl={horsesMenuActive} 
                                    open={Boolean(horsesMenuActive)} 
                                    onClose={handleMenuClose}
                                    >
                                    <MenuItem onClick={(path)=>handleMenuClick("stallions")}>Stallions</MenuItem>
                                    <MenuItem onClick={(path)=>handleMenuClick("mares")}>Mares</MenuItem>
                                    <MenuItem onClick={(path)=>handleMenuClick("stock")}>Stock for Sale</MenuItem>
                                </Menu>

                                {/* ABOUT BUTTON & MENU */}

                                <Button 
                                    className="navigation-button"
                                    aria-controls={ aboutMenuActive ? 'about' : false } 
                                    aria-haspopup="true" 
                                    aria-expanded={ aboutMenuActive ? 'true' : false } 
                                    onClick={()=>setAboutMenuActive(event.target)}
                                    >
                                    About
                                </Button>
                                
                                <Menu 
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

                                {/* CONTACT BUTTON */}

                                <Button 
                                    className="navigation-button"
                                    variant="text" 
                                    onClick={(path)=>handleMenuClick("contact")}
                                    >
                                    Contact
                                </Button>

                                {/* ADMIN BUTTON (Hide if user not admin not logged in) */}

                                { user.id && 
                                    <Button 
                                        className="navigation-button"
                                        variant="text" 
                                        onClick={(path)=>handleMenuClick("admin")}
                                        >
                                        Admin
                                    </Button> 
                                }

                                {/* SOCIAL BUTTON */}

                                <IconButton 
                                    className="navigation-icon-button" 
                                    href={facebookLink}
                                    target="_blank"
                                    >
                                    <FacebookIcon />
                                </IconButton>

                            </div>

                        </Toolbar>
                    </AppBar>

                </>
            :
                <>

                    {/* 
                        
                    ///////////////////////////////////
                    /// RENDER DOM - SMALL / MOBILE ///
                    ///////////////////////////////////
                    
                    */}

                    <AppBar id="navigation" position="static">
                        <Toolbar>

                            <div id="navigation-group-small-left">

                                {/* MENU BUTTON */}

                                <IconButton 
                                    className="navigation-icon-button" 
                                    onClick={()=>setDrawerActive(true)}
                                    >
                                    <MenuIcon />
                                </IconButton>

                            </div>

                            <div id="navigation-group-small-center">

                                {/* HOME BUTTON */}

                                <Button 
                                    className="navigation-button-home"
                                    variant="text" 
                                    disableRipple 
                                    onClick={handleMenuClick}
                                    >
                                    Westwind Morgans
                                </Button>

                            </div>

                            <div id="navigation-group-small-right">

                                {/* SOCIAL BUTTON */}

                                <IconButton 
                                    className="navigation-icon-button" 
                                    href={facebookLink} 
                                    target="_blank"
                                    >
                                    <FacebookIcon />
                                </IconButton>

                            </div>

                        </Toolbar>
                    </AppBar>

                    {/* SWIPEABLE DRAWER FOR MOBILE */}

                    <NavigationDrawer drawerActive={drawerActive} setDrawerActive={setDrawerActive} handleMenuClick={handleMenuClick}/>

                </>
        
            }

        </>
    );
    
}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Navigation;