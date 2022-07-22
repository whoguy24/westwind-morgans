///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Home/Home.css';

import React, { useState } from 'react';

function Home() {

  const [width, setWidth] = useState(document.body.clientWidth);

  window.addEventListener('resize', handleContentSizeChange)

  function handleContentSizeChange() {
      setWidth(document.body.clientWidth)
  }

  return (

    <div>

      { width > 750 ?

        <div id="home-slide">

          {/* <img id="home-slide-image" src="/images/slide_home.png" />

          <div id="home-slide-header">

            <h3>100% OLD FOUNDATION RANCHING BLOODLINES</h3>


          </div> */}

        </div>

      :

        <div id="home-slide-mobile">

          <div id="home-slide-header-mobile">
            <h3>100% OLD FOUNDATION RANCHING BLOODLINES</h3>
          </div>

          <img id="home-slide-image-mobile" src="/images/slide_home.png" />

        </div>

      }

      

    </div>

  );

}

export default Home;