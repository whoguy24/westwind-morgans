///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UsersRegister/UsersRegister.css';

// Import Libraries
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import MUI Components
import Button from '@mui/material/Button';
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
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function UsersRegister({ dialog, setDialog, setUser }) {

  const dispatch = useDispatch();

  // Redux Store Variables
  const users = useSelector(store => store.users);
  const server = useSelector(store => store.server);

  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState(null);

  const [newUserData, setNewUserData] = useState({
    firstName: {value:"", error:null},
    lastName: {value:"", error:null}, 
    email: {value:"", error:null},
    username: {value:"", error:null},
    role: {value:"USER", error:null},
    password: {value:"", error:null},
    confirmPassword: {value:"", error:null}
  });

  useEffect(() => {
    if (
      formError &&
      Boolean(newUserData.firstName.value) &&
      Boolean(newUserData.lastName.value) &&
      Boolean(newUserData.email.value) &&
      Boolean(newUserData.username.value) &&
      Boolean(newUserData.role.value) &&
      Boolean(newUserData.password.value) &&
      Boolean(newUserData.confirmPassword.value) &&
      !Boolean(newUserData.firstName.error) &&
      !Boolean(newUserData.lastName.error) &&
      !Boolean(newUserData.email.error) &&
      !Boolean(newUserData.username.error) &&
      !Boolean(newUserData.role.error) &&
      !Boolean(newUserData.password.error) &&
      !Boolean(newUserData.confirmPassword.error)
    ) {
      setFormError(null);
    }
  }, [newUserData]);

  function editNewUserData( field, value ) {
    const editedUserData = newUserData;
    switch (field) {
      case "FIRST_NAME": editedUserData.firstName.value = value;        
        break;
      case "LAST_NAME": editedUserData.lastName.value = value;        
        break;
      case "EMAIL": editedUserData.email.value = value;        
        break;
      case "USERNAME": editedUserData.username.value = value;        
        break;
      case "ROLE": editedUserData.role.value = value;        
        break;
      case "PASSWORD": editedUserData.password.value = value;        
        break;
      case "CONFIRM_PASSWORD": editedUserData.confirmPassword.value = value;        
        break;
      default: return
    };
    setNewUserData({...editedUserData});
  }

  function closeDialog() {
    setUser(null);
    setDialog(null);
    const editedUserData = {
      firstName: {value:"", error:null},
      lastName: {value:"", error:null}, 
      email: {value:"", error:null},
      username: {value:"", error:null},
      role: {value:"USER", error:null},
      password: {value:"", error:null},
      confirmPassword: {value:"", error:null}
    }
    setNewUserData({...editedUserData});
    setFormError(null);
  }

  function validateInput(field) {
    return new Promise(( resolve, reject )=> {
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const editedUserData = newUserData
      switch (field) {
        case "FIRST_NAME" :
          if ( newUserData.firstName.value.length < 1 ) {
            editedUserData.firstName.error = "Required Field";
          } else {
            editedUserData.firstName.error = null;
          };
          break;
        case "LAST_NAME" :
          if ( newUserData.lastName.value.length < 1 ) {
            editedUserData.lastName.error = "Required Field";
          } else {
            editedUserData.lastName.error = null;
          };
          break;
        case "EMAIL" :
          if ( newUserData.email.value.length < 1 ) {
            editedUserData.email.error = "Required Field";
          } else if ( !newUserData.email.value.match(validRegex) ) {
            editedUserData.email.error = "Please enter a valid email address.";
          } else {
            editedUserData.email.error = null;
          };
          break;
        case "USERNAME" :
          if ( newUserData.username.value.length < 1 ) {
            editedUserData.username.error = "Required Field";
          } 
          else if ( users.find(user => user.username === newUserData.username.value) ) {
            editedUserData.username.error = "User already exists.";
          }
          else {
            editedUserData.username.error = null;
          };
          break;
        case "ROLE" :
          if ( newUserData.role.value.length < 1 ) {
            editedUserData.role.error = "Required Field";
          }
          else if ( newUserData.role.value != "ADMIN" && newUserData.role.value != "USER" ) {
            editedUserData.role.error = "Invalid Selection";
          }
          else {
            editedUserData.role.error = null;
          }
          break;
        case "PASSWORD" :
          if ( newUserData.password.value.length < 1 ) {
            editedUserData.password.error = "Required Field";
          } else {
            editedUserData.password.error = null;
          };
          break;
        case "CONFIRM_PASSWORD" :
          if ( newUserData.confirmPassword.value.length < 1 ) {
            editedUserData.confirmPassword.error = "Required Field";
          } 
          else if ( newUserData.confirmPassword.value != newUserData.password.value ) {
            editedUserData.password.error = "Passwords do not match.";
            editedUserData.confirmPassword.error = "Passwords do not match.";
          }
          else {
            editedUserData.password.error = null;
            editedUserData.confirmPassword.error = null;
          };
          break;
        default:
          reject(false);
      }
      setNewUserData({...editedUserData});
      resolve(true);
    })
  };

  async function validateForm() {
    await validateInput("FIRST_NAME")
    await validateInput("LAST_NAME");
    await validateInput("EMAIL");
    await validateInput("USERNAME");
    await validateInput("ROLE");
    await validateInput("PASSWORD");
    await validateInput("CONFIRM_PASSWORD");
    if (      
      !Boolean(newUserData.firstName.error) &&
      !Boolean(newUserData.lastName.error) &&
      !Boolean(newUserData.email.error) &&
      !Boolean(newUserData.username.error) &&
      !Boolean(newUserData.role.error) &&
      !Boolean(newUserData.password.error) &&
      !Boolean(newUserData.confirmPassword.error)
    ) {
      return true;
    }
    else {
      return false;
    }
  }
  
  function registerUser(event) {
    event.preventDefault();
    validateForm().then((result)=> {
      if (result) {
        dispatch({ type: "LOADING_TRUE" });
        closeDialog();
        setTimeout(() => {
          dispatch({
            type: "REGISTER",
            payload: {
                firstName: newUserData.firstName.value,
                lastName: newUserData.lastName.value,
                email: newUserData.email.value,
                username: newUserData.username.value,
                role: newUserData.role.value,
                password: newUserData.password.value,
            },
          });
        }, server.loading_duration);
      } else {
        setFormError("Please resolve errors before continuing.");
      };
    })
  };

  return (
    <>

      <Dialog open={ dialog === "REGISTER" ? true : false } onClose={closeDialog}>
        <DialogTitle id="users-dialog-title">New User Registration</DialogTitle>
          <DialogContent>
          <div id="users-add-user-dialog-form">
            <div className="users-dialog-textfield-group">
              <Collapse id="users-dialog-collapse" in={formError!=null}>
                <Alert id="users-dialog-alert" severity="error" variant="filled">{formError}</Alert>
              </Collapse>
            </div>
            <div className="users-dialog-textfield-group">
              <TextField 
                className="users-dialog-textfield" 
                required
                label="First Name" 
                variant="standard" 
                error={Boolean(newUserData.firstName.error)}
                helperText={newUserData.firstName.error} 
                value={newUserData.firstName.value} 
                onChange={(event)=>editNewUserData("FIRST_NAME", event.target.value)}
                onBlur={()=>validateInput("FIRST_NAME")}
              />
              <TextField 
                className="users-dialog-textfield" 
                required
                label="Last Name" 
                variant="standard"
                error={Boolean(newUserData.lastName.error)}
                helperText={newUserData.lastName.error} 
                value={newUserData.lastName.value} 
                onChange={(event)=>editNewUserData("LAST_NAME", event.target.value)}
                onBlur={()=>validateInput("LAST_NAME")}
              />
            </div>
            <div className="users-dialog-textfield-group">
                <TextField 
                  className={"users-dialog-textfield"}
                  required
                  label="Email" 
                  variant="standard" 
                  error={Boolean(newUserData.email.error)}
                  helperText={newUserData.email.error} 
                  value={newUserData.email.value} 
                  onChange={(event)=>editNewUserData("EMAIL", event.target.value)}
                  onBlur={()=>validateInput("EMAIL")}
                />
            </div>
            <div className="users-dialog-textfield-group">
              <TextField 
                className="users-dialog-textfield"
                required
                label="Username" 
                variant="standard" 
                error={Boolean(newUserData.username.error)}
                helperText={newUserData.username.error} 
                value={newUserData.username.value} 
                onChange={(event)=>editNewUserData("USERNAME", event.target.value)}
                onBlur={()=>validateInput("USERNAME")}
              />
              <Select
                labelId="demo-simple-select-label"
                className="users-dialog-textfield"
                variant="standard"
                label="Role"
                error={Boolean(newUserData.role.error)}
                // helperText={newUserData.role.error} 
                value={newUserData.role.value} 
                onChange={(event)=>editNewUserData("ROLE", event.target.value)}
                onBlur={()=>validateInput("ROLE")}
              >
                <MenuItem value={"USER"}>USER</MenuItem>
                <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
              </Select>
            </div>
            <div className="users-dialog-textfield-group">
              <TextField 
                className="users-dialog-textfield" 
                required
                type= {showPassword ? "text" : "password"}
                label="Password" 
                variant="standard" 
                error={Boolean(newUserData.password.error)}
                helperText={newUserData.password.error} 
                value={newUserData.password.value} 
                onChange={(event)=>editNewUserData("PASSWORD", event.target.value)}
                onBlur={()=>validateInput("PASSWORD")}
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
            <div className="users-dialog-textfield-group">
              <TextField 
                className="users-dialog-textfield" 
                required
                type= {showPassword ? "text" : "password"}
                label="Confirm Password" 
                variant="standard" 
                error={Boolean(newUserData.confirmPassword.error)}
                helperText={newUserData.confirmPassword.error} 
                value={newUserData.confirmPassword.value} 
                onChange={(event)=>editNewUserData("CONFIRM_PASSWORD", event.target.value)}
                onBlur={()=>validateInput("CONFIRM_PASSWORD")}
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
          </div>
        </DialogContent>
        <DialogActions>
          <Button className="users-dialog-button" onClick={closeDialog}>Cancel</Button>
          <Button className="users-dialog-button" onClick={registerUser}>Register</Button>
        </DialogActions>
      </Dialog>

    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default UsersRegister;