///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../ImageCard/ImageCard.css';

// Import MUI Components
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function ImageCard({image}) {

  return (
    <>

      <Card id="image-card" key={image.id} >
        <CardActionArea>
          <a href={`/assets/database/${image.id}.jpg`} target="_blank">
            <CardMedia
              id="image-card-image"
              component="img"
              image={`/assets/database/${image.id}.jpg`}
            />
          </a>
        </CardActionArea>
      </Card>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default ImageCard;