///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../HomeHorses/HomeHorses.css';

// Import Libraries
import { useNavigate } from 'react-router-dom';

// Import MUI Components
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import Header from "../Header/Header";

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function HomeHorses() {

  // React Router Variables
  const navigate = useNavigate();

  // Render DOM
  return (
    <>

        <Header style="content" title="Horses"/>

        <div id="home-horses">
          <div id="home-horses-grid">

            <Card className="home-horses-card" onClick={()=>navigate("/stallions")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="/assets/static/home_stallions.png"
                  alt="home_stallions"
                />
                <div className="home-horses-card-label">
                  <Typography className="home-horses-card-label-text">STALLIONS</Typography>
                </div>
              </CardActionArea>
            </Card>

            <Card className="home-horses-card" onClick={()=>navigate("/mares")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="/assets/static/home_mares.png"
                  alt="home_mares"
                />
                <div className="home-horses-card-label">
                  <Typography className="home-horses-card-label-text">MARES</Typography>
                </div>
              </CardActionArea>
            </Card>

            <Card className="home-horses-card" onClick={()=>navigate("/geldings")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="/assets/static/home_geldings.png"
                  alt="home_geldings"
                />
                <div className="home-horses-card-label">
                  <Typography className="home-horses-card-label-text">GELDINGS</Typography>
                </div>
              </CardActionArea>
            </Card>

            <Card className="home-horses-card" onClick={()=>navigate("/colts")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="/assets/static/home_colts.png"
                  alt="home_colts"
                />
                <div className="home-horses-card-label">
                  <Typography className="home-horses-card-label-text">COLTS</Typography>
                </div>
              </CardActionArea>
            </Card>

            <Card className="home-horses-card" onClick={()=>navigate("/fillies")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="/assets/static/home_fillies.png"
                  alt="home_fillies"
                />
                <div className="home-horses-card-label">
                  <Typography className="home-horses-card-label-text">FILLIES</Typography>
                </div>
              </CardActionArea>
            </Card>

            <Card className="home-horses-card" onClick={()=>navigate("/testimonials")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="/assets/static/home_testimonials.png"
                  alt="home_testimonials"
                />
                <div className="home-horses-card-label">
                  <Typography className="home-horses-card-label-text">TESTIMONIALS</Typography>
                </div>
              </CardActionArea>
            </Card>

          </div>
        </div>
        
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default HomeHorses;