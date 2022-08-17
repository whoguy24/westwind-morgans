///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Footer/Footer.css';

// Import Libraries
import { useState } from 'react';
import { NavLink } from "react-router-dom";

// Import MUI Components
import Typography from '@mui/material/Typography';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Footer() {

    // State Variables
    const [width, setWidth] = useState(document.body.clientWidth);

    // Event Listener for Responsive Rendering
    window.addEventListener('resize', handleViewportChange)

    // Update State On Viewport Size Change
    function handleViewportChange() {
        setWidth(document.body.clientWidth)
    }

    // Render DOM
    return (
        <>

            <div id="footer">

                { width > 800 &&

                    <div id="footer-links">
                        <div id="footer-links-container">
                            <ul>
                                <li><NavLink to="/stallions">Stallions</NavLink></li>
                                <li><NavLink to="/mares">Mares</NavLink></li>
                                <li><NavLink to="/stock">Stock for Sale</NavLink></li>
                            </ul>
                            <ul>
                                <li><NavLink to="/foundation">Why Foundation</NavLink></li>
                                <li><NavLink to="/breeding">Breeding</NavLink></li>
                                <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                                
                            </ul>
                            <ul>
                            <li><NavLink to="/visit">Visit</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                {/* <li><NavLink to="/home">Admin</NavLink></li> */}
                            </ul>
                            <ul>
                                <NavLink to="/contact">
                                    Bryan Blatt, Owner<br/>
                                    Sheridan, MT<br/>
                                    (406) 451-9311<br/>
                                </NavLink>
                            </ul>
                        </div>
                    </div>

                }

                <Typography id="footer-copyright">
                    2022 © Westwind Morgans<br/>
                    Web Design by O'Brien Software Studios
                </Typography>

            </div>

        </>
    );
    
}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Footer;