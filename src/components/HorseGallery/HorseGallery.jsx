///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import './HorseGallery.css';

// Import Libraries
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import Custom Components
import HorseCard from "../HorseCard/HorseCard";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Toolbar from "../Toolbar/Toolbar";

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function HorseGallery({type, title}) {

  // Redux Variables
  const dispatch = useDispatch();

  // Fetch Objects from Database on Page Load
  useEffect(() => {
    dispatch({ type: "FETCH_HORSES", route:type });
    window.scrollTo(0, 0);
  }, [type]);

  console.log("THIS IS JUST A TEST TO MAKE SURE SHIT IS UPDATIN'")

  // Redux Store Variables
  const horses = useSelector(store => store.horses);
  // const visibleHorses = horses?.filter(horse=>horse.visible === 1);

  // Render DOM
  return (
    <>

        <Banner image={`banner_${type}`}/>
        <Header style="banner" title={title}/>

        <Toolbar type={type} title={title}/>

        <div id="horse-gallery">


          {/* { horses && horses.map((horse) => {
            return (
                <HorseCard key={horse.id} horse={horse}/>
              )
            })
          } */}


        </div>
      
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default HorseGallery;