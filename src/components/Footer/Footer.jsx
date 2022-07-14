///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Footer/Footer.css';

import React, { useState } from 'react';

import { NavLink } from "react-router-dom";

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Footer() {

    const [width, setWidth] = useState(document.body.clientWidth);

    window.addEventListener('resize', handleContentSizeChange)
  
    function handleContentSizeChange() {
        setWidth(document.body.clientWidth)
    }

    // Render DOM
    return (
        <div id="footer">

            <img id="footer-logo" src="/images/footer_logo.png" />

            { width > 750 ?

                <div id="footer-links">

                    <ul>
                        <li><NavLink to="/home">Westwind Morgans</NavLink></li>
                        <li><NavLink to="/mission">Mission</NavLink></li>
                        <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                        <li><NavLink to="/visit">Visit</NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink to="/stallions_gallery">Stallions</NavLink></li>
                        <li><NavLink to="/mares_gallery">Mares</NavLink></li>
                        <li><NavLink to="/sales_gallery">Sales</NavLink></li>
                        <li><NavLink to="/expecting_gallery">Expected 2023</NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink to="/social_media">News</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/home">Admin Login</NavLink></li>
                    </ul>

                    <ul>
                        <li>Bryan Blatt, Owner</li>
                        <li>Bozeman, MT</li>
                        <li>(406) 451-9311</li>
                        <li>bryan@westwindmorgans.com</li>
                    </ul>

                </div>

                :

                <div>

                    <div id="footer-links-mobile">

                        <ul>
                            <li><NavLink to="/home">Westwind Morgans</NavLink></li>
                            <li><NavLink to="/mission">Mission</NavLink></li>
                            <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                            <li><NavLink to="/visit">Visit</NavLink></li>
                            <li><NavLink to="/stallions_gallery">Stallions</NavLink></li>
                            <li><NavLink to="/mares_gallery">Mares</NavLink></li>
                            <li><NavLink to="/sales_gallery">Sales</NavLink></li>
                            <li><NavLink to="/expecting_gallery">Expected 2023</NavLink></li>
                            <li><NavLink to="/social_media">News</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/home">Admin Login</NavLink></li>

                            <div id="footer-seperator"></div>

                            <li className="footer-address">Bryan Blatt, Owner</li>
                            <li className="footer-address">Bozeman, MT</li>
                            <li className="footer-address">(406) 451-9311</li>
                            <li className="footer-address">bryan@westwindmorgans.com</li>
                        </ul>

                    </div>

                </div>

            }

            <div id="footer-copyright">
                <p>2022 © Westwind Morgans </p>
                <p>Web Design by O'Brien Software Studios</p>
            </div>



        </div>
    );
}

// Export Component Function
export default Footer;