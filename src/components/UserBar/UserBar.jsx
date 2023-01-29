///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UserBar/UserBar.css';

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import React from 'react';

// Import Custom Components

// Import MUI Components
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function UserBar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux Store Variables
  const user = useSelector(store => store.user);  

  function handleLoginButton() {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
};

  return (
    <>
      <div id="userbar">
        <Typography id="userbar-username-text">Logged in: {user.username}</Typography>
        <Button id="userbar-logout-button" onClick={handleLoginButton}>Log Out</Button>
      </div>
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default UserBar;