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

        </div>

      :

        <div id="home-slide-mobile">

          <img id="home-slide-image-mobile" src="/images/slide_home.png" />

        </div>

      }

      

    </div>

  );

}

export default Home;