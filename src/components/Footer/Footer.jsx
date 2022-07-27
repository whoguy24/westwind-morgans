///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

import React, { useState } from 'react';

import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";

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
        <div>
            { width > 700 ? <FooterDesktop/> : <FooterMobile/> }
        </div>
    );
}

// Export Component Function
export default Footer;