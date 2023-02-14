///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UsersDialogEdit/UsersDialogEdit.css';

import { useSelector } from 'react-redux';

import { useState } from 'react';

// Import Custom Components

// Import MUI Components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function UsersDialogPassword({ dialog, resetDialog, userData, editUserData, validateInput, changePassword, formError }) {

  // Redux Store Variables
  const user = useSelector(store => store.user);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>

        <Dialog open={ dialog.active && dialog.mode === "CHANGE_PASSWORD" } onClose={()=>resetDialog(false, "", {})}>

          <DialogTitle id="users-dialog-title">Change Password</DialogTitle>

            <DialogContent>

              <Collapse id="users-dialog-collapse" in={formError!=null}>
                <Alert id="users-dialog-alert" severity="error" variant="filled">{formError}</Alert>
              </Collapse>

              <div id="users-dialog-grid-container">

                <TextField 
                  className="users-dialog-textfield" 
                  required
                  type= {showPassword ? "text" : "password"}
                  label="Current Password" 
                  variant="standard" 
                  error={Boolean(userData.password_current.error)}
                  helperText={userData.password_current.error} 
                  value={userData.password_current.value || ""} 
                  onChange={(event)=>editUserData("PASSWORD_CURRENT", event.target.value)}
                  onBlur={()=>validateInput("PASSWORD_CURRENT")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <IconButton 
                            id="login-input-toggle-visibility-button"
                            disableRipple
                            onClick={()=>setShowPassword( !showPassword ? true : false )} 
                          >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

                <TextField 
                  className="users-dialog-textfield" 
                  required
                  type= {showPassword ? "text" : "password"}
                  label="New Password" 
                  variant="standard" 
                  error={Boolean(userData.password_new.error)}
                  helperText={userData.password_new.error} 
                  value={userData.password_new.value || ""} 
                  onChange={(event)=>editUserData("PASSWORD_NEW", event.target.value)}
                  onBlur={()=>validateInput("PASSWORD_NEW")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <IconButton 
                            id="login-input-toggle-visibility-button"
                            disableRipple
                            onClick={()=>setShowPassword( !showPassword ? true : false )} 
                          >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

                <TextField 
                  className="users-dialog-textfield" 
                  required
                  type= {showPassword ? "text" : "password"}
                  label="Confirm New Password" 
                  variant="standard" 
                  error={Boolean(userData.password_confirm.error)}
                  helperText={userData.password_confirm.error} 
                  value={userData.password_confirm.value || ""} 
                  onChange={(event)=>editUserData("PASSWORD_CONFIRM", event.target.value)}
                  onBlur={()=>validateInput("PASSWORD_CONFIRM")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <IconButton 
                            id="login-input-toggle-visibility-button"
                            disableRipple
                            onClick={()=>setShowPassword( !showPassword ? true : false )} 
                          >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                      </InputAdornment>
                    )
                  }}
                />

              </div>

            </DialogContent>

          <DialogActions>

            <div id="users-dialog-buttons">

              <Button className="dialog-button-cancel" onClick={()=>resetDialog(false, "", {})}>Cancel</Button>
              <Button className="dialog-button-confirm" onClick={changePassword}>Change Password</Button>

            </div>

          </DialogActions>

        </Dialog>




    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default UsersDialogPassword;