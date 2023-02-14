///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UsersDialogEdit/UsersDialogEdit.css';

import { useSelector } from 'react-redux';

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

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function UsersDialogEdit({ dialog, resetDialog, userData, editUserData, validateInput, editUser, formError }) {

  // Redux Store Variables
  const user = useSelector(store => store.user);

  return (
    <>

        <Dialog open={ dialog.active && dialog.mode === "EDIT" } onClose={()=>resetDialog(false, "", {})}>

          <DialogTitle id="users-dialog-title">Edit User</DialogTitle>

            <DialogContent>

              <Collapse id="users-dialog-collapse" in={formError!=null}>
                <Alert id="users-dialog-alert" severity="error" variant="filled">{formError}</Alert>
              </Collapse>

              <div id="users-dialog-grid-container">

                <TextField 
                  className={ user.role === "ADMIN" ? "users-dialog-textfield-username" : "users-dialog-textfield" }
                  label="Username" 
                  variant="standard" 
                  error={Boolean(userData.username.error)}
                  helperText={userData.username.error} 
                  value={userData.username.value  || ""} 
                  onChange={(event)=>editUserData("USERNAME", event.target.value)}
                  onBlur={()=>validateInput("USERNAME")}
                />

                { user.role === "ADMIN" &&

                  <Select
                    variant="standard"
                    label="Role"
                    error={Boolean(userData.role.error)}
                    value={userData.role.value || ""} 
                    onChange={(event)=>editUserData("ROLE", event.target.value)}
                    onBlur={()=>validateInput("ROLE")}
                  >
                    <MenuItem value={"USER"}>USER</MenuItem>
                    <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                  </Select>

                }

                <TextField 
                  className="users-dialog-textfield" 
                  label="Email" 
                  variant="standard" 
                  error={Boolean(userData.email.error)}
                  helperText={userData.email.error} 
                  value={userData.email.value || ""} 
                  onChange={(event)=>editUserData("EMAIL", event.target.value)}
                  onBlur={()=>validateInput("EMAIL")}
                />

                <TextField 
                  className="users-dialog-textfield" 
                  label="First Name (Optional)" 
                  variant="standard" 
                  error={Boolean(userData.first_name.error)}
                  helperText={userData.first_name.error} 
                  value={userData.first_name.value || ""} 
                  onChange={(event)=>editUserData("FIRST_NAME", event.target.value)}
                />

                <TextField 
                  className="users-dialog-textfield" 
                  label="Last Name (Optional)" 
                  variant="standard" 
                  error={Boolean(userData.last_name.error)}
                  helperText={userData.last_name.error} 
                  value={userData.last_name.value || ""} 
                  onChange={(event)=>editUserData("LAST_NAME", event.target.value)}
                />

                <TextField 
                  className="users-dialog-textfield" 
                  label="Phone (Optional)" 
                  variant="standard" 
                  error={Boolean(userData.phone.error)}
                  helperText={userData.phone.error} 
                  value={userData.phone.value || ""} 
                  onChange={(event)=>editUserData("PHONE", event.target.value)}
                />

                <TextField 
                  className="users-dialog-textfield-multiline" 
                  multiline
                  rows={4}
                  label="Comments (Optional)" 
                  variant="outlined" 
                  error={Boolean(userData.comments.error)}
                  helperText={userData.comments.error} 
                  value={userData.comments.value || ""} 
                  onChange={(event)=>editUserData("COMMENTS", event.target.value)}
                />

                <Button className="dialog-button-inline" disableRipple onClick={()=>resetDialog(true, "CHANGE_PASSWORD", dialog.user)}>Change Password</Button>
                <Button className="dialog-button-inline" disableRipple onClick={()=>resetDialog(true, "DELETE", dialog.user)}>Delete User</Button>         

              </div>

            </DialogContent>

          <DialogActions>

            <div id="users-dialog-buttons">

              <Button className="dialog-button-cancel" onClick={()=>resetDialog(false, "", {})}>Cancel</Button>
              <Button className="dialog-button-confirm" onClick={editUser}>Save</Button>

            </div>

          </DialogActions>

        </Dialog>




    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default UsersDialogEdit;