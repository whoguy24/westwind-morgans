///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

import React, { useState } from 'react';

import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Navigation() {

    const [width, setWidth] = useState(document.body.clientWidth);

    window.addEventListener('resize', handleContentSizeChange)

    function handleContentSizeChange() {
        setWidth(document.body.clientWidth)
    }

    // Render DOM
    return (
        <div>
            { width > 700 ? <NavigationDesktop /> : <NavigationMobile /> }
        </div>
    );
}

// Export Component Function
export default Navigation;