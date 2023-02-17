///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Login/Login.css';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import Toast from "../Toast/Toast";
import Loading from "../Loading/Loading";
import LoginResetPassword from "../LoginResetPassword/LoginResetPassword";

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



    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [dialogResetPassword, setDialogResetPassword] = useState(false);

    // Redux Store Variables
    const server = useSelector(store => store.server);
    const token = useSelector(store => store.token);

    const { reset_token } = useParams();

    useEffect(() => { 
        dispatch({
          type: "FETCH_USER_FROM_RESET_TOKEN",
          payload: { reset_token: reset_token },
        });
      }, []);

    function handleLoginButton(event) {
        event.preventDefault();
        if (!username.length) {
            setUsernameError("Required Field")
        } else {
            setUsernameError("")
        }
        if (!password.length) {
            setPasswordError("Required Field")
        } else {
            setPasswordError("")
        }
        if (username.length > 0 && password.length > 0) {
            setUsernameError("")
            setPasswordError("")
            dispatch({ type: "LOADING_TRUE" });
            setTimeout(() => {
                dispatch({ type: "LOGIN", payload: { username: username, password: password }});
            }, server.loading_duration);
        }
    };

    const handleShowPassordButton = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownShowPassword = (event) => {
        event.preventDefault();
    };

    function test() {
        dispatch({type:"FETCH_USERS"})
    }

    // Render DOM
    return (
        
        <div id="login">
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
                />
                <TextField 
                    className="login-input" 
                    label="Password" variant="standard" 
                    required 
                    helperText={passwordError}
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
                <div>        
                    <Button onClick={test}>Test</Button>    
                    <Button onClick={()=>setDialogResetPassword(true)}>Forgot Password</Button>
                    <Button id="login-button" onClick={handleLoginButton}>Log In</Button>
                </div> 
                <input type="submit" hidden />
            </Box>

            <LoginResetPassword dialogResetPassword={dialogResetPassword} setDialogResetPassword={setDialogResetPassword}/>

            <Loading />
            <Toast />

        </div>

    );
}

// Export Component Function
export default Login;