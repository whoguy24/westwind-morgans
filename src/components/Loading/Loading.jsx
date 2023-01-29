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

  function setLoading() {
    dispatch({ 
      type: 'SET_SERVER', 
      payload: {
        loading:false, 
        duration:server.duration,
        result:server.result,
        toast_open:server.toast_open,
        toast_autoHideDuration:server.toast_autoHideDuration, 
        toast_severity:server.toast_severity, 
        toast_variant:server.toast_variant,
        toast_description:server.toast_description
      }
    })
  }

  return (
    <>

      <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={server.loading || false} onClick={setLoading}>
          <CircularProgress color="inherit" />
      </Backdrop>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Loading;