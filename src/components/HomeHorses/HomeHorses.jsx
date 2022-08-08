///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../HomeHorses/HomeHorses.css';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';

import { useNavigate } from 'react-router-dom';

function HomeHorses() {

  const navigate = useNavigate();

  return (
    <>
    
      <div id="home-horses-header">
        <Typography id="home-horses-header-text">Horses</Typography>
      </div>

        <div id="home-horses">
          <div id="home-horses-grid">

            <Card className="home-horses-card" onClick={()=>navigate("/stallions")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="/images/home_stallions.png"
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
                  image="/images/home_mares.png"
                  alt="home_mares"
                />
                <div className="home-horses-card-label">
                  <Typography className="home-horses-card-label-text">MARES</Typography>
                </div>
              </CardActionArea>
            </Card>

            <Card className="home-horses-card" onClick={()=>navigate("/stock")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="/images/home_stock.png"
                  alt="home_stock"
                />
                <div className="home-horses-card-label">
                  <Typography className="home-horses-card-label-text">STOCK FOR SALE</Typography>
                </div>
              </CardActionArea>
            </Card>

          </div>
        </div>
        
    </>
  );

}

export default HomeHorses;