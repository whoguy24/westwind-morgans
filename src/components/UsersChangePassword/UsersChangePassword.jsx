///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UsersChangePassword/UsersChangePassword.css';

// Import Custom Components

// Import MUI Components
import Button from '@mui/material/Button';

// Import Libraries
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function UsersChangePassword({ dialog, user, setDialog, setUser }) {

  const dispatch = useDispatch();

  // Redux Store Variables
  const server = useSelector(store => store.server);

  const [changePasswordCurrent, setChangePasswordCurrent] = useState("");
  const [changePasswordNew, setChangePasswordNew] = useState("");
  const [changePasswordConfirm, setChangePasswordConfirm] = useState("");

  function changePassword() {
    dispatch({ type: "LOADING_TRUE" });
    setDialog(null);
    setTimeout(() => {
      dispatch({
        type: 'CHANGE_USER_PASSWORD',
        payload: {
          username: user.username,
          oldPassword: changePasswordCurrent,
          newPassword: changePasswordConfirm
        }
      })
      setUser(null);
    }, server.loading_duration);
  }

  function closeDialog() {
    setUser(null);
    setDialog(null);
  }

  return (
    <>

      <Dialog open={ dialog==="CHANGE_PASSWORD" ? true : false } onClose={closeDialog}>
        <DialogTitle id="users-dialog-title">Change Password</DialogTitle>
          <DialogContent>
            <TextField 
              className="users-dialog-textfield" 
              required
              label="Current Password" 
              variant="standard"
              value={changePasswordCurrent} 
              onChange={(event)=>setChangePasswordCurrent(event.target.value)} 
            />
            <TextField 
              className="users-dialog-textfield" 
              required
              label="New Password" 
              variant="standard"
              value={changePasswordNew} 
              onChange={(event)=>setChangePasswordNew(event.target.value)} 
            />
            <TextField 
              className="users-dialog-textfield" 
              required
              label="Confirm New Password" 
              variant="standard"
              value={changePasswordConfirm} 
              onChange={(event)=>setChangePasswordConfirm(event.target.value)} 
            />
          </DialogContent>
        <DialogActions>
          <Button className="users-dialog-button" onClick={closeDialog}>Cancel</Button>
          <Button className="users-dialog-button" onClick={changePassword}>Change Password</Button>
        </DialogActions>
      </Dialog>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default UsersChangePassword;