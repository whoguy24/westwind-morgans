///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Home/Home.css';

import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';

import React, { useEffect, useState } from 'react';

function Home() {

  const [width, setWidth] = useState(document.body.clientWidth);

  window.addEventListener('resize', handleContentSizeChange)

  function handleContentSizeChange() {
      setWidth(document.body.clientWidth)
  }

  useEffect(() => {
    setTimeout(() => {;
    }, 3000);
  }, []);

  return (

    <div id="home-container">

      <div id="home-header">
        <Typography id="home-header-text">100% Old Foundation Ranching Bloodlines</Typography>
      </div>

      <div id="home-hero">
          <img id="home-hero-image" src="/images/home_hero.png" alt="home"/>
          <Typography id="home-hero-caption">
              National Reined<br/>
              Cowhorse Association<br/>
              Open Competition<br/>
              Zane Davis Performance Horses<br/>
              Zane Davis Trainer/Rider<br/>
              Rockin Horse Photography Image
          </Typography>
      </div>

      <div id="home-westwind-otto">
        <Typography id="home-westwind-otto-text">Home of Westwind Otto</Typography>
      </div>

      <div className="home-header">
        <Typography className="home-header-text">Horses</Typography>
      </div>

      <div className="home-container">

        <Card className="home-horse-card">
          <CardActionArea>

            <CardMedia
              height="100%"
              component="img"
              image="/images/home_stallions.png"
              alt="home_stallions"
            />

            <div className="home-horse-card-label">
              <Typography className="home-horse-card-label-text">STALLIONS</Typography>
            </div>

          </CardActionArea>
        </Card>

        <Card className="home-horse-card">
          <CardActionArea>
            <CardMedia
              height="100%" 
              component="img"
              image="/images/home_mares.png"
              alt="home_mares"
            />
            <div className="home-horse-card-label">
              <Typography className="home-horse-card-label-text">MARES</Typography>
            </div>
          </CardActionArea>
        </Card>

        <Card className="home-horse-card">
          <CardActionArea>
            <CardMedia
              height="100%"
              component="img"
              image="/images/home_stock.png"
              alt="home_stock"
            />
            <div className="home-horse-card-label">
              <Typography className="home-horse-card-label-text">STOCK FOR SALE</Typography>
            </div>
          </CardActionArea>
        </Card>





      </div>

      <div className="home-header">
        <Typography className="home-header-text">Foundation</Typography>
      </div>

      <div className="home-container">
      </div>

      <div className="home-header">
        <Typography className="home-header-text">Breeding</Typography>
      </div>

      <div className="home-container">
      </div>


    </div>

  );

}

export default Home;