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
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

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

    const [showAlert, setShowAlert] = useState(false);
    const [loading, setLoading] = useState(false);

    // Redux Store Variables
    const error = useSelector(store => store.error);

    useEffect(() => { 
        setUsernameError("")
        setPasswordError("")
        if (error?.code) {
            setLoading(true)
            setTimeout(() => {
                setShowAlert("Username and password combination entered does not match our records. Please try again.")
                setUsername("");
                setPassword("");
                setLoading(false)
            }, 1000);
        }
    }, [error]);

    function handleLoginButton(event) {
        event.preventDefault();
        if(username.length > 0 || password.length > 0) {
            setLoading(true)
            setTimeout(() => {
                dispatch({
                    type: "LOGIN",
                    payload: {
                        username: username,
                        password: password,
                    },
                });
                navigate("/admin");
                setLoading(false)
            }, 1000);
        } else {
            setUsernameError("Required Field")
            setPasswordError("Required Field")
        }
    };

    function handleAlertClose() {
        setUsernameError("")
        setPasswordError("")
        setShowAlert(false)
        dispatch({ type: "ERROR_CLEAR" });
    }

    const handleShowPassordButton = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownShowPassword = (event) => {
        event.preventDefault();
    };

    // Render DOM
    return (
        
        <div id="login">
            { showAlert.length > 0 && 
                <Alert id="login-alert" onClose={handleAlertClose} variant="filled" severity="error">
                    {showAlert}
                </Alert>
            }
            <Box component="form" id="login-inputs" onSubmit={handleLoginButton}>
                <h2 id="login-header">Admin Login</h2>
                <TextField 
                    className="login-input" 
                    label="Username " 
                    variant="standard" 
                    helperText={usernameError}
                    required 
                    value={username} 
                    onChange={(event) => setUsername(event.target.value)} 
                    onBlur={handleAlertClose}
                />
                <TextField 
                    className="login-input" 
                    label="Password" variant="standard" 
                    required 
                    helperText={passwordError}
                    value={password}
                    type= {showPassword ? "text" : "password"}
                    onChange={(event) => setPassword(event.target.value)}
                    onBlur={handleAlertClose}
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
                <input type="submit" hidden />
            </Box>
            <Backdrop
                sx={{ color: '#fff', zIndex: 1 }}
                open={loading}
                onClick={()=>setLoading(false)}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>

    );
}

// Export Component Function
export default Login;