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

  let year = new Date(horse.birth_date).getUTCFullYear()

  // Render DOM
  return (
    <>

      <Card className="horse-card" key={horse.id} onClick={()=>navigate(`/${horse.type}/${horse.id}`)}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300px"
            image={horse.profile_url? horse.profile_url : "/assets/static/profile.png"}
            alt="placeholder_stallion"
          />
          <div className="horse-card-label">
            <Typography className="horse-card-label-text">{horse.name}</Typography>
            <Typography className="horse-card-label-text-small">{`${year ? year : ""} ${horse.category ? horse.category : ""}`}</Typography>
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