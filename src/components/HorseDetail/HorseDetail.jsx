///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../HorseDetail/HorseDetail.css';

// Import Libraries
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

// Import Custom Components
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Toolbar from "../Toolbar/Toolbar";
import PedigreeGraph from "../PedigreeGraph/PedigreeGraph";
import ImageCard from "../ImageCard/ImageCard";
import HorseCard from "../HorseCard/HorseCard";

// Import MUI Components
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function HorseDetail({type, title}) {

  let { id } = useParams();

  // Redux Variables
  const dispatch = useDispatch();

  // React Router Variables
  const navigate = useNavigate();

  // Redux Store Variables
  const horse = useSelector(store => store.horse);

  console.log(horse)

  // Fetch Object from Database On Page Load
  useEffect(() => {
    dispatch({ type: "FETCH_HORSE", route: type, id: id });
    window.scrollTo(0, 0);
  }, [id]);

  const sire = horse.parents?.filter(parent=>parent.sex == "M")[0];
  const dam = horse.parents?.filter(parent=>parent.sex == "F")[0];

  // Render DOM
  return (
    <>

        <Banner image={`banner_${type}`}/>
        <Header style="banner" title={title}/>

        <Toolbar type={type} title={title} horse={horse}/>

        <div id="horse-detail-header">
            <Button id="form-button" onClick={()=>navigate(-1)}>Back</Button>
            <Typography id="horse-detail-header-text">{horse.name}</Typography>
        </div>

        <div id="horse-detail-divider"/>

        <div className="horse-detail-section">

          <a id="horse-detail-form-link" href={`/assets/database/${horse.profile_id}.jpg`} target="_blank">
            <img id="horse-detail-form-image" src={horse.profile_id ? `/assets/database/${horse.profile_id}.jpg` : "/assets/static/profile.png"} />
          </a>

          <div id="horse-detail-form">

            <Typography id="horse-detail-form-text-name">{horse.name}</Typography>
            { horse.color ? 
              <Typography id="horse-detail-form-text-desc">{horse.calc_year} {horse.color} {horse.category}</Typography>
            :
              <Typography id="horse-detail-form-text-desc">{horse.calc_year} {horse.category}</Typography>
            }

            { sire && dam &&
              <a id="horse-detail-form-text-pedigree" href={horse.pedigree_url} target="_blank">{sire.name} x {dam.name}</a>
            }

          </div>

        </div>

        { horse.parents?.length > 0 && 
          <>

            <Header style="subheading" title="Pedigree" />
            <PedigreeGraph horse={horse}/>

          </>
        }

        {  horse.images?.filter(image=>image.id != horse.profile_id).length > 0 &&

        <>

          <Header style="subheading" title="Gallery"/>
          <div id="horse-detail-image-gallery">
              { horse.images.map((image) => {
                return (
                  image.id == horse.profile_id? null : <ImageCard key={image.id} image={image}/>
                )
              }
            )}
          </div>

        </>

        }

        { horse.progeny?.length > 0 &&

          <>

            <Header style="subheading" title="Progeny"/>

            <div id="horse-detail-progeny-gallery">

              {horse.progeny.map((horse) => {
                  return (
                    <HorseCard key={horse.id} horse={horse}/>
                  )
              })}

            </div>

          </>

        }

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default HorseDetail;