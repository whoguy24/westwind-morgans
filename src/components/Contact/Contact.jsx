///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Contact/Contact.css';

import Header from "../Header/Header";
import Banner from "../Banner/Banner";

import Typography from '@mui/material/Typography';

// Import Custom Components

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Contact({type, title, facebookLink}) {

  return (
    <>
        <Banner image={`banner_${type}`}/>
        <Header style="banner" title={title}/>

        <div id="contact">
          <div id="contact-info">

            <img id="contact-bryan-image" src="/assets/static/contact_bryan.png" alt="contact"/>

            <Typography id="contact-info-text-header">Contact Westwind Morgans</Typography>

              <div>
                <Typography id="contact-info-text">
                  Bryan Blatt, Owner <br />
                  (406) 451-9311 <br />
                  <a href="mailto:bblatt@westwindmorgans.com?subject=Westwindmorgans.com" target="_blank">bblatt@westwindmorgans.com</a> <br /> <br />
                  <a href={facebookLink} target="_blank">Follow Bryan on Facebook →</a>
                </Typography>
              </div>

          </div>
        </div>
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Contact;