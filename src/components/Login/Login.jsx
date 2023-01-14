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

    // Redux Store Variables
    const error = useSelector(store => store.error);

    useEffect(() => {
        switch (error?.code) {
            case 400:
                setUsername("");
                setPassword("");
                setUsernameError("Required Field");
                setPasswordError("Required Field");
            break;
            case 401:
                setUsernameError("");
                setPasswordError("Invalid username and password combination.");
            break;
            case 404:
                setUsername("");
                setPassword("");
                setUsernameError("");
                setPasswordError("Could not connect to server. Please contact your administrator.");
            break;
            case 500:
                setUsername("");
                setPassword("");
                setUsernameError("");
                setPasswordError("There was a problem communicating with the server. Please contact your administrator.");
            break;
            default:
                setUsername("");
                setPassword("");
                setUsernameError("");
                setPasswordError("");
            break;
        }
    }, [error]);

    function handleLoginButton(event) {
        event.preventDefault();
        dispatch({
            type: "LOGIN",
            payload: {
                username: username,
                password: password,
            },
        });
        navigate("/admin");
    };

    const handleShowPassordButton = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownShowPassword = (event) => {
        event.preventDefault();
    };

    // Render DOM
    return (
        
        <div id="login">
            
            <Box component="form" id="login-inputs">
                <h2 id="login-header">Admin Login</h2>
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

        </div>

    );
}

// Export Component Function
export default Login;