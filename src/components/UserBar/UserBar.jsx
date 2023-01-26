///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UserBar/UserBar.css';

import { useSelector, useDispatch } from "react-redux";

import React, { useState } from 'react';

// Import Custom Components

// Import MUI Components
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function UserBar() {

  const dispatch = useDispatch();

  // Redux Store Variables
  const user = useSelector(store => store.user);  

  const [loading, setLoading] = useState(false);

  function handleLoginButton() {
    setLoading(true)
    setTimeout(() => {
        dispatch({
          type: "LOGOUT",
        });
        setLoading(false)
    }, 1000);
};

  return (
    <>
      <div id="userbar">
        <Typography id="userbar-username-text">Logged in: {user.username}</Typography>
        <Button id="userbar-logout-button" onClick={handleLoginButton}>Log Out</Button>
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

export default UserBar;