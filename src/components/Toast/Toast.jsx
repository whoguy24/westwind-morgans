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

  const snackbar = useSelector(store => store.snackbar);

  function testCloseSnackbar() {
    dispatch({ 
      type: "CLOSE_SNACKBAR", 
      payload: {
        open:false, 
        severity:"success",
        autoHideDuration:6000, 
        variant:"filled", 
        description:""
      },
    });
  }

  return (
    <>

      <Snackbar open={snackbar?.open} autoHideDuration={snackbar?.autoHideDuration} onClose={testCloseSnackbar}>
          <Alert onClose={testCloseSnackbar} severity={snackbar?.severity} variant={snackbar?.variant} >
              {snackbar?.description}
          </Alert>
      </Snackbar>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Toast;