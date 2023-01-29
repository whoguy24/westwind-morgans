///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Login/Login.css';

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import Toast from "../Toast/Toast";
import Loading from "../Loading/Loading";

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import serverReducer from '../../redux/reducers/server.reducer';

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
    const server = useSelector(store => store.server);

    useEffect(() => { 
        if( server.loading === true ) {
            setTimeout(() => {
                dispatch({ 
                    type: 'SET_SERVER', 
                    payload: {
                      loading:false, 
                      duration:server.duration,
                      result:server.result,
                      toast_open:true,
                      toast_autoHideDuration:server.toast_autoHideDuration, 
                      toast_severity:server.toast_severity, 
                      toast_variant:server.toast_variant,
                      toast_description:server.toast_description
                    }
                });
                if (server.result === 200) {
                    navigate("/admin");
                }
            }, server.duration);
        }
    }, [server.loading]);

    function handleLoginButton(event) {
        event.preventDefault();
        if(username.length > 0 || password.length > 0) {
            dispatch({ type: "LOGIN", payload: { username: username, password: password }});
        } else {
            setUsernameError("Required Field")
            setPasswordError("Required Field")
        }
    };

    function handleAlertClose() {
        setUsernameError("")
        setPasswordError("")
        setShowAlert(false)
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
            {/* { showAlert.length > 0 && 
                <Alert id="login-alert" onClose={handleAlertClose} variant="filled" severity="error">
                    {showAlert}
                </Alert>
            } */}
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
                <Button id="login-button" onClick={handleLoginButton}>Log In</Button>
                <input type="submit" hidden />
            </Box>

            <Loading />
            <Toast />

        </div>

    );
}

// Export Component Function
export default Login;