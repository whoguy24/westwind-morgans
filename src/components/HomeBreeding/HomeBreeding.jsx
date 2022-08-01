///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Home/Home.css';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
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

        <div className="home-container-grid">

        

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

      </div>

      <div className="home-header">
        <Typography className="home-header-text">Foundation</Typography>
      </div>

      <div className="home-container">

        <div>
          <img id="home-container-image" src="/images/home_foundation.png" alt="home"/>
        </div>

        <div>
          <Typography className="home-container-text">
              Our foundation stock goes back to many of 
              the historic Morgan stock horses 
              from early ranches of Kansas, Texas, 
              Oklahoma, and the Southwest.
          </Typography>
          <Button className="home-container-button">Read More</Button>
        </div>

      </div>

      <div className="home-header">
        <Typography className="home-header-text">Breeding</Typography>
      </div>

      <div className="home-container">

      <div>
          <img id="home-container-image" src="/images/home_breeding.png" alt="home"/>
        </div>

        <div>
          <Typography className="home-container-text">
            We strive to carry on the tradition of the 
            working cow horse which the Warner Angus Ranch 
            has produced for several generations and is 
            carried on by the family to this day.
          </Typography>
          <Button className="home-container-button">Read More</Button>
        </div>

      </div>


    </div>

  );

}

export default Home;