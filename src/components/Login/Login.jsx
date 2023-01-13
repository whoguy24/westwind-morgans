///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Login/Login.css';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [showErrorDialog, setShowErrorDialog] = useState(false);

    // Redux Store Variables
    const user = useSelector(store => store.user);

    useEffect(() => {
        
    }, []);

    

    function handleLoginButton(event) {

        event.preventDefault();


        dispatch({
            type: "LOGIN",
            payload: {
                username: username,
                password: password,
            },
        });

        
        



        // if (username && password) {
        //     dispatch({
        //         type: "LOGIN",
        //         payload: {
        //             username: username,
        //             password: password,
        //         },
        //     });
        //     console.log(user.id)
        //     if(user.id) {
        //         setUsername("")
        //         setPassword("")
        //         setUsernameError("")
        //         setPasswordError("")
        //         navigate("/admin")
        //     };
        // } else {
        //     dispatch({ type: 'LOGIN_INPUT_ERROR' });
        //     setUsername("")
        //     setPassword("")
        //     setUsernameError("Required Field")
        //     setPasswordError("Required Field")
        //     // setShowErrorDialog(true)
        // }

    };

    const handleShowPassordButton = () => {
        setShowPassword(!showPassword)
    };

    const handleCloseDialogButton = () => {
        setShowErrorDialog(false)
    };

    const handleMouseDownShowPassword = (event) => {
        event.preventDefault();
    };

    function debugRegister() {
        console.log(username, password);
        dispatch({
            type: 'REGISTER',
            payload: {
              username: username,
              password: password,
            },
          });
    }

    function debugLogOut() {
        dispatch({ type: 'LOGOUT' })
    }

    // Render DOM
    return (
        
        <div id="login">
            
            <Box component="form" id="login-inputs">
                <h2 id="login-header">Admin Login</h2>

                {/* TO BE REMOVED */}
                {/* <Button onClick={debugRegister}>Register</Button>
                <Button onClick={debugLogOut}>Log Out</Button> */}

                <TextField 
                    className="login-input" 
                    label="Username " 
                    variant="standard" 
                    helperText={usernameError}
                    required 
                    value={username} 
                    onChange={(event) => setUsername(event.target.value)} 
                />
                <TextField 
                    className="login-input" 
                    label="Password" variant="standard" 
                    helperText={passwordError}
                    required 
                    value={password}
                    type= {showPassword ? "text" : "password"}
                    onChange={(event) => setPassword(event.target.value)}
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
                <Button id="login-button" onClick={handleLoginButton}>Log In</Button>
            </Box>

            <Dialog open={showErrorDialog} onClose={handleCloseDialogButton}>

                <DialogContent>
                    <DialogContentText>Invalid Username or Password</DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button id="dialog-close-button" onClick={handleCloseDialogButton} autoFocus>Close</Button>
                </DialogActions>

            </Dialog>

        </div>

    );
}

// Export Component Function
export default Login;