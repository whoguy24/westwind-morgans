///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Footer/Footer.css';

import {NavLink } from "react-router-dom";

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Footer() {

    // Render DOM
    return (
        <div id="footer">
            <ul>
                <li><NavLink activeClassName="is-active" to="/home" exact>Westwind Morgans</NavLink></li>
                <li><NavLink activeClassName="is-active" to="/mission" exact>Mission</NavLink></li>
                <li><NavLink activeClassName="is-active" to="/testimonials" exact>Testimonials</NavLink></li>
                <li><NavLink activeClassName="is-active" to="/visit" exact>Visit</NavLink></li>
            </ul>
            <ul>
                <li><NavLink activeClassName="is-active" to="/stallions_gallery" exact>Stallions</NavLink></li>
                <li><NavLink activeClassName="is-active" to="/mares_gallery" exact>Mares</NavLink></li>
                <li><NavLink activeClassName="is-active" to="/sales_gallery" exact>Sales</NavLink></li>
                <li><NavLink activeClassName="is-active" to="/expecting_gallery" exact>Expected 2023</NavLink></li>
            </ul>
            <ul>
                <li><NavLink activeClassName="is-active" to="/social_media" exact>News</NavLink></li>
                <li><NavLink activeClassName="is-active" to="/contact" exact>Contact</NavLink></li>
                <li><NavLink activeClassName="is-active" to="/home" exact>Admin Login</NavLink></li>
            </ul>
                {/* <p>Bryan Blatt, Owner</p>
                <p>Bozeman, MT</p>
                <p>(406) 451-9311</p>
                <p>bryan@westwindmorgans.com</p> */}
        </div>
    );
}

// Export Component Function
export default Footer;