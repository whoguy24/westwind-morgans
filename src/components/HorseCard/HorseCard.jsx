///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../HorseCard/HorseCard.css';

import { useNavigate } from 'react-router-dom';

// Import MUI Components
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function HorseCard({horse}) {

  // React Router Variables
  const navigate = useNavigate();

  // Render DOM
  return (
    <>

      <Card id="horse-card" key={horse.id} onClick={()=>navigate(`/${horse.type}/${horse.id}`)}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300px"
            image={horse.profile_id? `/assets/database/${horse.profile_id}.jpg` : `/assets/static/profile.png`}
            alt="placeholder_stallion"
          />
          <div id="horse-card-label">
            <Typography id="horse-card-label-text">{horse.name}</Typography>
            <Typography id="horse-card-label-text-small">{`${horse.calc_year ? horse.calc_year : ""} ${horse.category ? horse.category : ""}`}</Typography>
          </div>
        </CardActionArea>
      </Card>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default HorseCard;