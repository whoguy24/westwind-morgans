///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Users/Users.css';

// Import MUI Components
import Button from '@mui/material/Button';

// Import Libraries
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Toast from "../Toast/Toast";
import Loading from "../Loading/Loading";

import UsersDialog from "../UsersDialog/UsersDialog";
import UsersTable from "../UsersTable/UsersTable";

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Users() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux Store Variables
  const users = useSelector(store => store.users);
  const server = useSelector(store => store.server);

  const [dialog, setDialog] = useState({
    active: false,
    mode: "",
    user: {}
  });

  function resetDialog (active, mode, user) {

    const resetDialog = {
      active: active,
      mode: mode,
      user: user
    }

    console.log(resetDialog)

    setDialog({...resetDialog})

  }

  useEffect(() => {
    dispatch({ type: "LOADING_TRUE" });
    setTimeout(() => {
      dispatch({type:"FETCH_USERS"})
    }, server.loading_duration);
  }, []);

  return (
    <>
      <div id ="users">

        <div id="users-toolbar">
          <Button className="users-button" onClick={()=>navigate(-1)}>Back</Button>
          <Button className="users-button" onClick={()=>resetDialog(true, "REGISTER", {})}>Add User</Button>
        </div>

        <UsersTable users={users} resetDialog={resetDialog} />
        <UsersDialog dialog={dialog} resetDialog={resetDialog} />

        <Toast />
        <Loading />

      </div>
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Users;