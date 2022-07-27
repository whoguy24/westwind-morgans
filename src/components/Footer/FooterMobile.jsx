///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Footer/FooterMobile.css';

import { NavLink } from "react-router-dom";

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Footer() {

    // Render DOM
    return (
        <div id="footer-mobile">

            <div id="footer-mobile-group-top">

                <div className="footer-mobile-column">
                    <ul>
                        <li><NavLink to="/mares">Mares</NavLink></li>
                        <li><NavLink to="/stallions">Stallions</NavLink></li>
                        <li><NavLink to="/breeding">Breeding</NavLink></li>
                        <li><NavLink to="/stock">Stock for Sale</NavLink></li>
                        <li><NavLink to="/foundation">Why Foundation</NavLink></li>
                    </ul>
                </div>

                <div className="footer-mobile-column">
                    <ul>
                        <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/visit">Visit</NavLink></li>
                        <li><a href="https://www.facebook.com/people/Westwind-Morgans/100063575859271/" target="_blank">News</a></li>
                        <li><NavLink to="/admin">Admin</NavLink></li>
                    </ul>
                </div>

            </div>

            <div id="footer-mobile-divider"></div>

            <div id="footer-mobile-group-center">
                <NavLink to="/contact">
                    Bryan Blatt, Owner<br/>
                    Sheridan, MT<br/>
                    (406) 451-9311<br/>
                </NavLink>
            </div>

            <div id="footer-mobile-group-bottom">
                <span className="footer-mobile-copyright">2022 © Westwind Morgans</span>
                <span className="footer-mobile-copyright">Web Design by O'Brien Software Studios</span>
            </div>

        </div>
    );
}

// Export Component Function
export default Footer;