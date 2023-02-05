///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UsersDelete/UsersDelete.css';

// Import Custom Components

// Import MUI Components
import Button from '@mui/material/Button';

// Import Libraries
import { useDispatch, useSelector } from 'react-redux';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function UsersDelete({ dialog, user, setDialog, setUser }) {

  const dispatch = useDispatch();

  // Redux Store Variables
  const server = useSelector(store => store.server);

  function closeDialog() {
    setUser(null);
    setDialog(null);
  }

  function deleteUser() {
    setDialog(null);
    dispatch({ type: "LOADING_TRUE" });
    setTimeout(() => {
      dispatch({
        type: 'DELETE_USER',
        payload: user
      })
      setUser(null);
    }, server.loading_duration);
  }

  return (
    <>

      <Dialog open={ dialog==="DELETE" ? true : false } onClose={ closeDialog }>
        <DialogTitle id="users-dialog-title">Delete User</DialogTitle>
          <DialogContent>
            Are you sure you want to permanently delete this user?<br/><br/>
            You cannot undo this action.
        </DialogContent>
        <DialogActions>
          <Button className="users-dialog-button" onClick={ closeDialog }>Cancel</Button>
          <Button className="users-dialog-button" onClick={ deleteUser }>Delete</Button>
        </DialogActions>
      </Dialog>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default UsersDelete;