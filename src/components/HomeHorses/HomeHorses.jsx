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

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function HomeHorses() {

  // React Router Variables
  const navigate = useNavigate();

  // Render DOM
  return (
    <>

      <div className="section-header">
        <Typography className="section-header-text">Horses</Typography>
      </div>

        <div id="home-horses">
          <div id="home-horses-grid">

            <Card className="gallery-card" onClick={()=>navigate("/stallions")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="/images/home_stallions.png"
                  alt="home_stallions"
                />
                <div className="gallery-card-label">
                  <Typography className="gallery-card-label-text">STALLIONS</Typography>
                </div>
              </CardActionArea>
            </Card>

            <Card className="gallery-card" onClick={()=>navigate("/mares")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="/images/home_mares.png"
                  alt="home_mares"
                />
                <div className="gallery-card-label">
                  <Typography className="gallery-card-label-text">MARES</Typography>
                </div>
              </CardActionArea>
            </Card>

            <Card className="gallery-card" onClick={()=>navigate("/colts")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="/images/home_colts.png"
                  alt="home_colts"
                />
                <div className="gallery-card-label">
                  <Typography className="gallery-card-label-text">COLTS</Typography>
                </div>
              </CardActionArea>
            </Card>

            <Card className="gallery-card" onClick={()=>navigate("/fillies")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="/images/home_fillies.png"
                  alt="home_fillies"
                />
                <div className="gallery-card-label">
                  <Typography className="gallery-card-label-text">FILLIES</Typography>
                </div>
              </CardActionArea>
            </Card>

            <Card className="gallery-card" onClick={()=>navigate("/geldings")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="/images/home_geldings.png"
                  alt="home_geldings"
                />
                <div className="gallery-card-label">
                  <Typography className="gallery-card-label-text">GELDINGS</Typography>
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