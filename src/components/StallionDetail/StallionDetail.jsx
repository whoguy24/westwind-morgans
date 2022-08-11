///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../StallionDetail/StallionDetail.css';

// Import Libraries
import { useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

// Import MUI Components
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function StallionDetail() {

  let { id } = useParams();

  // Redux Variables
  const dispatch = useDispatch();

  // Redux Store Variables
  const stallion = useSelector(store => store.stallion);

  // Fetch Object from Database On Page Load
  useEffect(() => {
    dispatch({ type: "FETCH_STALLION", payload:id });
  }, [id]);

  // Render DOM
  return (
    <>

      <div className="content-container">

        <div className="content-banner">
          <img className="content-banner-image" src="/images/stallion_banner.png" alt="stallion"/>
        </div>

        <div className="section-header-banner">
          <Typography className="section-header-banner-text">Stallions</Typography>
        </div>

        <div className="content-toolbar">

          <Breadcrumbs className="content-toolbar-breadcrumbs">
            <NavLink to="/home">Westwind Morgans</NavLink>
            <NavLink to="/stallions">Stallions</NavLink>
          </Breadcrumbs>

        </div>

      </div>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default StallionDetail;