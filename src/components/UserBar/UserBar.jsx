///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UserBar/UserBar.css';

import React from 'react';
import { useSelector, useDispatch } from "react-redux";

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

  // Redux Store Variables
  const user = useSelector(store => store.user);  
  const server = useSelector(store => store.server);  

  function handleLogoutButton() {
    dispatch({ type: "LOADING_TRUE" });
    setTimeout(() => {
      dispatch({ type: "LOGOUT" });
    }, server.loading_duration);
  };

  return (
    <>
      { user?.id && server.userbar &&
        <div id="userbar">
          <Typography id="userbar-username-text">Logged in: {`${user.first_name} ${user.last_name} (${user.username})`}</Typography>
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