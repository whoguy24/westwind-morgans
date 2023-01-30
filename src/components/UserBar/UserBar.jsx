///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UserBar/UserBar.css';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

// Import Custom Components
import Toast from "../Toast/Toast";
import Loading from "../Loading/Loading";

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
  const server = useSelector(store => store.server);  

  function handleLogoutButton() {
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => { 
    if( server.loading === true && server.action === "LOGOUT_USER" ) {
        setTimeout(() => {
            dispatch({ 
                type: 'SET_SERVER', 
                payload: {
                    action:server.action,
                    loading:false, 
                    userbar:false,
                    duration:server.duration,
                    result:server.result,
                    toast_open:true,
                    toast_autoHideDuration:server.toast_autoHideDuration, 
                    toast_severity:server.toast_severity, 
                    toast_variant:server.toast_variant,
                    toast_description:server.toast_description
                }
            });
            navigate("/login");
        }, server.duration);
    }
}, [server.loading]);

  return (
    <>
      { user?.id && server.userbar &&
        <div id="userbar">
          <Typography id="userbar-username-text">Logged in: {user.username}</Typography>
          <Button id="userbar-logout-button" onClick={handleLogoutButton}>Log Out</Button>
        </div>
      }
      <Toast />
      <Loading />
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default UserBar;