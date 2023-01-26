///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Users/Users.css';

// Import MUI Components
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';

// Import Libraries
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Users() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux Store Variables
  const user = useSelector(store => store.user);
  const users = useSelector(store => store.users);
  const error = useSelector(store => store.error);

  const [addUserDialogActive, setAddUserDialogActive] = useState(false);

  const [addUserFirstName, setAddUserFirstName] = useState("");
  const [addUserLastName, setAddUserLastName] = useState("");
  const [addUserEmail, setAddUserEmail] = useState("");
  const [addUserUsername, setAddUserUsername] = useState("");
  const [addUserRole, setAddUserRole] = useState("USER");
  const [addUserPassword, setAddUserPassword] = useState("");
  const [addUserConfirmPassword, setAddUserConfirmPassword] = useState("");

  const [addUserFirstNameError, setAddUserFirstNameError] = useState("");
  const [addUserLastNameError, setAddUserLastNameError] = useState("");
  const [addUserEmailError, setAddUserEmailError] = useState("");
  const [addUserUsernameError, setAddUserUsernameError] = useState("");
  const [addUserRoleError, setAddUserRoleError] = useState("");
  const [addUserPasswordError, setAddUserPasswordError] = useState("");
  const [addUserConfirmPasswordError, setAddUserConfirmPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showSnackbarSuccess, setShowSnackbarSuccess] = useState(false);
  const [showSnackbarError, setShowSnackbarError] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {

      if(user?.id) {


        if (!loading) {
          setLoading(true)
          setTimeout(() => {

            if (error?.code === 201) {
              setShowSnackbarSuccess(true)
              dispatch({ type: "ERROR_CLEAR" });
            } else if (error?.code) {
              setShowSnackbarError(true)
              dispatch({ type: "ERROR_CLEAR" });
            }
  
            setLoading(false)
          }, 3000);
        } else {
          dispatch({ type: 'FETCH_USERS' });
        }


















        

      } else {
          navigate('/login')
      }



  }, [error]);

  const columns = [
    { field: "first_name", headerName: "First Name", width: 120 },
    { field: "last_name", headerName: "Last Name", width: 120 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "username", headerName: "Username", width: 120 },
  ];
  
  function handleAddUserDialogClose() {
    setAddUserDialogActive(false)
    setAddUserFirstName("")
    setAddUserLastName("")
    setAddUserEmail("")
    setAddUserUsername("")
    setAddUserRole("USER")
    setAddUserPassword("")
    setAddUserConfirmPassword("")
    setAddUserFirstNameError("")
    setAddUserLastNameError("")
    setAddUserEmailError("")
    setAddUserUsernameError("")
    setAddUserRoleError("")
    setAddUserPasswordError("")
    setAddUserConfirmPasswordError("")
  }

  function validateFirstName() {
    if ( addUserFirstName.length < 1 ) {
      setAddUserFirstNameError("Required Field");
    } else {
      setAddUserFirstNameError("");
    }
  }

  function validateLastName() {
    if ( addUserLastName.length < 1 ) {
      setAddUserLastNameError("Required Field");
    } else {
      setAddUserLastNameError("");
    }
  }

  function validateEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (addUserEmail.length < 1 ) {
      setAddUserEmailError("Required Field");
    } else if ( !addUserEmail.match(validRegex)) {
      setAddUserEmailError("Please enter a valid email address.")
    } else {
      setAddUserEmailError("")
    }
  }

  function validateUsername() {
    if ( addUserUsername.length < 1 ) {
      setAddUserUsernameError("Required Field");
    }
    else if ( addUserUsername.length < 1 ) {
      setAddUserUsernameError("Username already exists.");
    }
    else {
      setAddUserUsernameError("");
    }
  }

  function validateRole() {
    if ( addUserRole.length < 1 ) {
      setAddUserRoleError("Required Field");
    }
    else if (addUserRole != "ADMIN" && addUserRole != "USER") {
      setAddUserRoleError("Invalid Selection");
    }
    else {
      setAddUserRoleError("");
    }
  }

  function validatePassword() {
    if ( addUserPassword.length < 1 ) {
      setAddUserPasswordError("Required Field");
    }
    else {
      setAddUserPasswordError("");
    }
  }
  
  function validateConfirmPassword() {
    if ( addUserConfirmPassword.length < 1 ) {
      setAddUserConfirmPasswordError("Required Field");
    }
    else if (addUserConfirmPassword != addUserPassword) {
      setAddUserPasswordError("Passwords do not match.");
      setAddUserConfirmPasswordError("Passwords do not match.");
    }
    else {
      setAddUserPasswordError("");
      setAddUserConfirmPasswordError("");
    }
  }

  const handleShowPassordButton = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownShowPassword = (event) => {
      event.preventDefault();
  };

  const handleShowConfirmPassordButton = () => {
    setShowConfirmPassword(!showConfirmPassword)
  };

  const handleMouseDownShowConfirmPassword = (event) => {
      event.preventDefault();
  };
  

  function handleRegisterNewUser(event) {
    event.preventDefault();
    if (
      !addUserFirstNameError &&
      !addUserLastNameError &&
      !addUserUsernameError &&
      !addUserEmailError &&
      !addUserRoleError  &&
      !addUserPasswordError &&
      !addUserConfirmPasswordError
    ) {
      dispatch({
          type: "REGISTER",
          payload: {
              firstName: addUserFirstName,
              lastName: addUserLastName,
              username: addUserUsername,
              role: addUserRole,
              email: addUserEmail,
              password: addUserPassword,
          },
      });
      handleAddUserDialogClose();
    } else {
      return false;
    }
  }

  return (
    <>
      <div id ="users">

        <div id="users-toolbar">
          <Button className="users-button" onClick={()=>navigate(-1)}>Back</Button>
          <Button className="users-button" onClick={()=>setAddUserDialogActive(true)}>Add User</Button>
        </div>

        <div id="users-grid">
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick={true}
            sx={{
              boxShadow: 2,
              border: 0.5,
              borderColor: "var(--color-accent-300)",
              borderRadius: 0,
            }}
          />
        </div>

        <Dialog open={addUserDialogActive} onClose={handleAddUserDialogClose}>
          <DialogTitle id="users-dialog-title">New User Registration</DialogTitle>
            <DialogContent>
            <div id="users-add-user-dialog-form">

              <div className="users-dialog-textfield-group">
                <TextField 
                  className="users-dialog-textfield" 
                  required
                  label="First Name" 
                  variant="standard" 
                  error={addUserFirstNameError.length > 0}
                  helperText={addUserFirstNameError} 
                  value={addUserFirstName} 
                  onChange={(event)=>setAddUserFirstName(event.target.value)} 
                  onBlur={validateFirstName}
                />
                <TextField 
                  className="users-dialog-textfield" 
                  required
                  label="Last Name" 
                  variant="standard"
                  error={addUserLastNameError.length > 0}
                  helperText={addUserLastNameError} 
                  value={addUserLastName} 
                  onChange={(event)=>setAddUserLastName(event.target.value)} 
                  onBlur={validateLastName}
                />
              </div>

              <div className="users-dialog-textfield-group">
                  <TextField 
                    className={"users-dialog-textfield"}
                    required
                    label="Email" 
                    variant="standard" 
                    error={addUserEmailError.length > 0}
                    helperText={addUserEmailError} 
                    value={addUserEmail} 
                    onChange={(event)=>setAddUserEmail(event.target.value)} 
                    onBlur={validateEmail}
                  />
              </div>
              
              <div className="users-dialog-textfield-group">
                <TextField 
                  className="users-dialog-textfield"
                  required
                  label="Username" 
                  variant="standard" 
                  error={addUserUsernameError.length > 0}
                  helperText={addUserUsernameError} 
                  value={addUserUsername} 
                  onChange={(event)=>setAddUserUsername(event.target.value)} 
                  onBlur={validateUsername}
                />

                <Select
                  labelId="demo-simple-select-label"
                  className="users-dialog-textfield"
                  variant="standard"
                  error={addUserRoleError.length > 0}
                  value={addUserRole} 
                  label="Role"
                  onChange={(event)=>setAddUserRole(event.target.value)} 
                  onBlur={validateRole}
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
                  error={addUserPasswordError.length > 0}
                  helperText={addUserPasswordError} 
                  value={addUserPassword} 
                  onChange={(event)=>setAddUserPassword(event.target.value)} 
                  onBlur={validatePassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <IconButton 
                              id="login-input-toggle-visibility-button"
                              aria-label="toggle password visibility" 
                              disableRipple
                              onClick={handleShowPassordButton} 
                              onMouseDown={handleMouseDownShowPassword}>
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
                  type= {showConfirmPassword ? "text" : "password"}
                  label="Confirm Password" 
                  variant="standard" 
                  error={addUserConfirmPasswordError.length > 0}
                  helperText={addUserConfirmPasswordError} 
                  value={addUserConfirmPassword} 
                  onChange={(event)=>setAddUserConfirmPassword(event.target.value)} 
                  onBlur={validateConfirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                          <IconButton 
                              id="login-input-toggle-visibility-button"
                              aria-label="toggle password visibility" 
                              disableRipple
                              onClick={handleShowConfirmPassordButton} 
                              onMouseDown={handleMouseDownShowConfirmPassword}>
                              {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                      </InputAdornment>
                    )
                }}
                />
              </div>

            </div>
          </DialogContent>
          <DialogActions>
            <Button className="users-dialog-button" onClick={handleAddUserDialogClose}>Cancel</Button>
            <Button className="users-dialog-button" onClick={handleRegisterNewUser}>Register</Button>
          </DialogActions>
        </Dialog>

        <Snackbar open={showSnackbarSuccess} autoHideDuration={6000} onClose={()=>setShowSnackbarSuccess(false)}>
          <Alert onClose={()=>setShowSnackbarSuccess(false)} severity="success" variant="filled" >
            User was created successfully.
          </Alert>
        </Snackbar>

        <Snackbar open={showSnackbarError} autoHideDuration={6000} onClose={()=>setShowSnackbarError(false)}>
          <Alert onClose={()=>setShowSnackbarError(false)} severity="error" variant="filled" >
            User could not be created. Please contact your administrator for details.
          </Alert>
        </Snackbar>

        <Backdrop
                sx={{ color: '#fff', zIndex: 1 }}
                open={loading}
                onClick={()=>setLoading(false)}
        >
          <CircularProgress color="inherit" />
        </Backdrop>

      </div>
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Users;