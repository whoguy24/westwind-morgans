///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import "../NavigationDrawer/NavigationDrawer.css";

// Import MUI Components
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Navigation({drawerActive, setDrawerActive, handleMenuClick}) {

    // Render DOM
    return (
        <>

            <SwipeableDrawer 
                variant="temporary" 
                open={drawerActive} 
                onOpen={()=>setDrawerActive(true)} 
                onClose={()=>setDrawerActive(false)} 
                anchor={'bottom'}
                >
                <List id="navigation-menu-list">
                    <ListItem disablePadding >
                        <ListItemButton onClick={(path)=>handleMenuClick("home")}>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>
                    <Divider className="navigation-divider" />
                    <ListItem disablePadding>
                        <ListItemButton onClick={(path)=>handleMenuClick("stallions")}>
                            <ListItemText primary="Stallions" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={(path)=>handleMenuClick("mares")}>
                            <ListItemText primary="Mares" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={(path)=>handleMenuClick("colts")}>
                            <ListItemText primary="Colts" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={(path)=>handleMenuClick("fillies")}>
                            <ListItemText primary="Fillies" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={(path)=>handleMenuClick("geldings")}>
                            <ListItemText primary="Geldings" />
                        </ListItemButton>
                    </ListItem>
                    <Divider className="navigation-divider" />
                    <ListItem disablePadding>
                        <ListItemButton onClick={(path)=>handleMenuClick("foundation")}>
                            <ListItemText primary="Foundation" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={(path)=>handleMenuClick("breeding")}>
                            <ListItemText primary="Breeding" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={(path)=>handleMenuClick("testimonials")}>
                            <ListItemText primary="Testimonials" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={(path)=>handleMenuClick("visit")}>
                            <ListItemText primary="Visit" />
                        </ListItemButton>
                    </ListItem>
                    <Divider className="navigation-divider" />
                    <ListItem disablePadding>
                        <ListItemButton onClick={(path)=>handleMenuClick("contact")}>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </SwipeableDrawer>

        </>
    );
    
}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Navigation;