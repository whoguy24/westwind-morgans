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

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Users() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux Store Variables
  const users = useSelector(store => store.users);
  const server = useSelector(store => store.server);

  const [addUserDialogActive, setAddUserDialogActive] = useState(false);
  const [deleteUserDialogActive, setDeleteUserDialogActive] = useState(false);
  const [deleteUser, setDeleteUser] = useState({});

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

  useEffect(() => {
    dispatch({ type: "LOADING_TRUE" });
    setTimeout(() => {
      dispatch({type:"FETCH_USERS"})
    }, server.loading_duration);
  }, []);

  const columns = [
    { field: "first_name", headerName: "First Name", width: 120 },
    { field: "last_name", headerName: "Last Name", width: 120 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "username", headerName: "Username", width: 120 },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 80,
      align: 'center',
      renderCell: (cellValues) => {
          return (
              <IconButton color='error' onClick={(event) => { handleDeleteButton(event, cellValues.row);}}>
                  <DeleteIcon />
              </IconButton>
          );
      }
  }
  ];

  function handleDeleteButton(event, user) {
    setDeleteUser(user);
    setDeleteUserDialogActive(true);
  }

  function handleDeleteUser(user) {
    setDeleteUserDialogActive(false);
    dispatch({ type: "LOADING_TRUE" });
    setTimeout(() => {
      dispatch({
        type: 'DELETE_USER',
        payload: user
      })
      setDeleteUser({});
    }, server.loading_duration);
  }

  function handleDeleteUserCancel() {
    setDeleteUser({});
    setDeleteUserDialogActive(false);
  }
  
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

  function validateInput (field) {
    switch (field) {
      case "addUserFirstName":
        if ( addUserFirstName.length < 1 ) {
          setAddUserFirstNameError("Required Field");
        } else {
          setAddUserFirstNameError("");
        }
        break;
      case "addUserLastName":
        if ( addUserLastName.length < 1 ) {
          setAddUserLastNameError("Required Field");
        } else {
          setAddUserLastNameError("");
        }
        break;
      case "addUserEmail":
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (addUserEmail.length < 1 ) {
          setAddUserEmailError("Required Field");
        } else if ( !addUserEmail.match(validRegex)) {
          setAddUserEmailError("Please enter a valid email address.")
        } else {
          setAddUserEmailError("")
        }
        break;
      case "addUserUsername":
        if ( addUserUsername.length < 1 ) {
          setAddUserUsernameError("Required Field");
        }
        else if ( users.find(user => user.username === addUserUsername) ) {
          setAddUserUsernameError("User already exists.");
        }
        else {
          setAddUserUsernameError("");
        }
        break;
      case "addUserRole":
        if ( addUserRole.length < 1 ) {
          setAddUserRoleError("Required Field");
        }
        else if (addUserRole != "ADMIN" && addUserRole != "USER") {
          setAddUserRoleError("Invalid Selection");
        }
        else {
          setAddUserRoleError("");
        }
        break;
      case "addUserPassword":
        if ( addUserPassword.length < 1 ) {
          setAddUserPasswordError("Required Field");
        }
        else {
          setAddUserPasswordError("");
        }
        break;
      case "addUserConfirmPassword":
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
        break;
      default:
        break;
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
      dispatch({ type: "LOADING_TRUE" });
      handleAddUserDialogClose();
      setTimeout(() => {
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
      }, server.loading_duration);
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
                  onBlur={()=>validateInput("addUserFirstName")}
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
                  onBlur={()=>validateInput("addUserLastName")}
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
                    onBlur={()=>validateInput("addUserEmail")}
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
                  onBlur={()=>validateInput("addUserUsername")}
                />

                <Select
                  labelId="demo-simple-select-label"
                  className="users-dialog-textfield"
                  variant="standard"
                  error={addUserRoleError.length > 0}
                  value={addUserRole} 
                  label="Role"
                  onChange={(event)=>setAddUserRole(event.target.value)} 
                  onBlur={()=>validateInput("addUserRole")}
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
                  onBlur={()=>validateInput("addUserPassword")}
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
                  onBlur={()=>validateInput("addUserConfirmPassword")}
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

        <Dialog open={deleteUserDialogActive} onClose={()=>setDeleteUserDialogActive(false)}>
          <DialogTitle id="users-dialog-title">Delete User</DialogTitle>
            <DialogContent>
              Are you sure you want to permanently delete this user?<br/><br/>
              You cannot undo this action.
          </DialogContent>
          <DialogActions>
            <Button className="users-dialog-button" onClick={handleDeleteUserCancel}>Cancel</Button>
            <Button className="users-dialog-button" onClick={()=>handleDeleteUser(deleteUser)}>Delete</Button>
          </DialogActions>
        </Dialog>

        <Toast />
        <Loading />

      </div>
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Users;