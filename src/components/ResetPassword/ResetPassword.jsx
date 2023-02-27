///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../ResetPassword/ResetPassword.css';

import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useNavigate, useParams } from 'react-router-dom';

// Import Custom Components

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function ResetPassword() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(store => store.token);

  const [passwordData, setPasswordData] = useState({
    password_new: { value: "", error: null },
    password_confirm: { value: "", error: null }
  });

  const [showPassword, setShowPassword] = useState(false);

  function editUserData( field, value ) {
    const editedPasswordData = passwordData;
    switch (field) {
      case "PASSWORD_NEW": editedPasswordData.password_new.value = value;        
        break;
      case "PASSWORD_CONFIRM": editedPasswordData.password_confirm.value = value;        
        break;
      default: return
    };
    setPasswordData({...editedPasswordData});
  }

  function resetPassword() {
    dispatch({
      type: "RESET_PASSWORD_FROM_TOKEN",
      payload: {
        id: token.id,
        password_new: passwordData.password_new.value,
        reset_token: token.reset_token
      }
    });
  }

  return (
    <>
      <TextField 
        className="users-dialog-textfield" 
        required
        type= {showPassword ? "text" : "password"}
        label="New Password" 
        variant="standard" 
        // error={Boolean(userData.password_new.error)}
        // helperText={userData.password_new.error} 
        value={passwordData.password_new.value || ""} 
        onChange={(event)=>editUserData("PASSWORD_NEW", event.target.value)}
        // onBlur={()=>validateInput("PASSWORD_NEW")}
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
        // error={Boolean(userData.password_confirm.error)}
        // helperText={userData.password_confirm.error} 
        value={passwordData.password_confirm.value || ""} 
        onChange={(event)=>editUserData("PASSWORD_CONFIRM", event.target.value)}
        // onBlur={()=>validateInput("PASSWORD_CONFIRM")}
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

      <Button className="dialog-button-cancel" >Back</Button>
      <Button className="dialog-button-confirm" onClick={resetPassword}>Reset Password</Button>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default ResetPassword;