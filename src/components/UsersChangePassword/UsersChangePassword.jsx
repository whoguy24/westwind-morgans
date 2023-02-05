///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UsersChangePassword/UsersChangePassword.css';

// Import Custom Components

// Import MUI Components
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';

// Import Libraries
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Toast from "../Toast/Toast";
import Loading from "../Loading/Loading";

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyIcon from '@mui/icons-material/Key';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function UsersChangePassword() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux Store Variables
  const users = useSelector(store => store.users);
  const server = useSelector(store => store.server);

  const [addUserDialogActive, setAddUserDialogActive] = useState(false);
  const [deleteUserDialogActive, setDeleteUserDialogActive] = useState(false);
  const [changePasswordDialogActive, setChangePasswordDialogActive] = useState(false);
  const [tempUser, setTempUser] = useState({});

  const [addUserFirstName, setAddUserFirstName] = useState("");
  const [addUserLastName, setAddUserLastName] = useState("");
  const [addUserEmail, setAddUserEmail] = useState("");
  const [addUserUsername, setAddUserUsername] = useState("");
  const [addUserRole, setAddUserRole] = useState("USER");
  const [addUserPassword, setAddUserPassword] = useState("");
  const [addUserConfirmPassword, setAddUserConfirmPassword] = useState("");

  const [changePasswordCurrent, setChangePasswordCurrent] = useState("");
  const [changePasswordNew, setChangePasswordNew] = useState("");
  const [changePasswordConfirm, setChangePasswordConfirm] = useState("");

  const [addUserFirstNameError, setAddUserFirstNameError] = useState("");
  const [addUserLastNameError, setAddUserLastNameError] = useState("");
  const [addUserEmailError, setAddUserEmailError] = useState("");
  const [addUserUsernameError, setAddUserUsernameError] = useState("");
  const [addUserRoleError, setAddUserRoleError] = useState("");
  const [addUserPasswordError, setAddUserPasswordError] = useState("");
  const [addUserConfirmPasswordError, setAddUserConfirmPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function changePassword(username, oldPassword, newPassword) {
    dispatch({ type: "LOADING_TRUE" });
    setChangePasswordDialogActive(false);
    setTimeout(() => {
      dispatch({
        type: 'CHANGE_USER_PASSWORD',
        payload: {
          username: username,
          oldPassword: oldPassword,
          newPassword: newPassword
        }
      })
      setTempUser({});
    }, server.loading_duration);
  }

  function handleChangePasswordButton(event, user) {
    setTempUser(user);
    setChangePasswordDialogActive(true);
  }

  

  return (
    <>

      <Dialog open={changePasswordDialogActive} onClose={()=>setChangePasswordDialogActive(false)}>
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
          <Button className="users-dialog-button" onClick={()=>setChangePasswordDialogActive(false)}>Cancel</Button>
          <Button className="users-dialog-button" onClick={()=>changePassword(tempUser.username, changePasswordCurrent, changePasswordNew)}>Change Password</Button>
        </DialogActions>
      </Dialog>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default UsersChangePassword;