///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UserBar/UserBar.css';

import { useSelector, useDispatch } from "react-redux";

// Import Custom Components

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

  function handleLoginButton() {
    dispatch({
        type: "LOGOUT",
    });
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