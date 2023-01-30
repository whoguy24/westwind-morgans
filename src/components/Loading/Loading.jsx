///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Loading/Loading.css';

// Import Custom Components
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { useSelector, useDispatch } from "react-redux";

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Loading() {

  const dispatch = useDispatch();

  const server = useSelector(store => store.server);

  function setLoadingFalse() {
    dispatch({ type: "LOADING_FALSE" })
  }

  return (
    <>

      <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={server?.loading || false} onClick={setLoadingFalse}>
          <CircularProgress color="inherit" />
      </Backdrop>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Loading;