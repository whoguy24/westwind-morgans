///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import './FooterDesktop.css';

import { NavLink } from "react-router-dom";

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Footer() {

    // Render DOM
    return (
        <div id="footer">

            <div id="footer-group-top">
                
                <div className="footer-group-top-column">
                    <ul>
                        <li><NavLink to="/mares">Mares</NavLink></li>
                        <li><NavLink to="/stallions">Stallions</NavLink></li>
                    </ul>
                </div>

                <div className="footer-group-top-column">
                    <ul>
                        <li><NavLink to="/breeding">Breeding</NavLink></li>
                        <li><NavLink to="/stock">Stock for Sale</NavLink></li>
                    </ul>
                </div>

                <div className="footer-group-top-column">
                    <ul>
                        <li><NavLink to="/foundation">Why Foundation</NavLink></li>
                        <li><NavLink to="/contact">Testimonials</NavLink></li>
                    </ul>
                </div>

                <div className="footer-group-top-column">
                    <ul>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/visit">Visit</NavLink></li>
                        <li><NavLink to="/admin">Admin</NavLink></li>
                    </ul>
                </div>

                <div className="footer-group-top-column">
                    <ul>
                        <NavLink to="/contact">
                            Bryan Blatt, Owner<br/>
                            Sheridan, MT<br/>
                            (406) 451-9311<br/>
                        </NavLink>
                    </ul>
                </div>

            </div>

            <div id="footer-group-bottom">
                <span className="footer-copyright">2022 © Westwind Morgans</span>
                <span className="footer-copyright">Web Design by O'Brien Software Studios</span>
            </div>
            
        </div>
    );
}

// Export Component Function
export default Footer;