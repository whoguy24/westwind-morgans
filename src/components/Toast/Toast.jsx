///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Toast/Toast.css';

// Import Custom Components
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { useSelector, useDispatch } from "react-redux";

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Toast() {

  const dispatch = useDispatch();

  const server = useSelector(store => store.server);

  function closeToast() {
    dispatch({ type: 'TOAST_CLOSE' })
  }

  return (
    <>

      <Snackbar open={server?.toast_open || false} autoHideDuration={server?.toast_autoHideDuration || 6000} onClose={closeToast}>
          <Alert onClose={closeToast} severity={server?.toast_severity || "success"} variant={server?.toast_variant || "filled"} >
              {server?.toast_description}
          </Alert>
      </Snackbar>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Toast;