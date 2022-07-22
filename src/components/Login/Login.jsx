///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Login/Login.css';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLoginButton(event) {
        event.preventDefault();
        if (username && password) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    username: username,
                    password: password,
                },
            });
            navigate('/home')
        } else {
            alert('Please populate all required fields.')
            dispatch({ type: 'LOGIN_INPUT_ERROR' });
        }
    };

    // Render DOM
    return (
        
        <div id="login-background">
            <Box component="form" id="login-input-container">
                <h2 id="login-header">Owner Login</h2>
                <TextField className="login-input" label="Username " variant="outlined" required value={username} onChange={(event) => setUsername(event.target.value)} />
                <TextField className="login-input" label="Password" variant="outlined" required value={password} onChange={(event) => setPassword(event.target.value)} />
                <Button id="login-button" onClick={handleLoginButton}>Log In</Button>
            </Box>
        </div>

    );
}

// Export Component Function
export default Login;