///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import './LoginResetPassword.css';

import React, { useState } from 'react';

import { useDispatch } from "react-redux";

// Import Custom Components

// Import MUI Components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function LoginResetPassword({dialogResetPassword, setDialogResetPassword}) {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  function handleSendResetLinkButton () {
    dispatch({ type: "RESET_PASSWORD", payload: { email: email } });
  }

  return (
    <>

        <Dialog open={dialogResetPassword} onClose={()=>setDialogResetPassword(false)}>

          <DialogTitle id="users-dialog-title">Reset Password</DialogTitle>

          <DialogContent>

          <TextField 
            label="Email" 
            variant="standard" 
            value={email} 
            onChange={(event)=>setEmail(event.target.value)}
          />

          </DialogContent>

          <DialogActions>

            <div id="users-dialog-buttons">

              <Button className="dialog-button-cancel" onClick={()=>setDialogResetPassword(false)}>Cancel</Button>
              <Button className="dialog-button-confirm" onClick={handleSendResetLinkButton}>Send Reset Link</Button>

            </div>

          </DialogActions>

        </Dialog>




    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default LoginResetPassword;