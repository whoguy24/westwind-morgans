///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UsersDialog/UsersDialog.css';

import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

// Import Custom Components
import UsersDialogEdit from "../UsersDialogEdit/UsersDialogEdit";
import UsersDialogPassword from "../UsersDialogPassword/UsersDialogPassword";
import UsersDialogDelete from "../UsersDialogDelete/UsersDialogDelete";

// Import MUI Components

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function UsersDialog({dialog, resetDialog}) {

  const dispatch = useDispatch();

  // Redux Store Variables
  const users = useSelector(store => store.users);
  const server = useSelector(store => store.server);

  const [userData, setUserData] = useState({
    username: { value: "", error: null },
    role: { value: "USER", error: null },
    email: { value: "", error: null },
    first_name: { value: "", error: null },
    last_name: { value: "", error: null }, 
    phone: { value: "", error: null },
    comments: { value: "", error: null },
    password_current: { value: "", error: null },
    password_new: { value: "", error: null },
    password_confirm: { value: "", error: null }
  });

  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (dialog.mode === "EDIT") {
      setUserData({
        username: { value: dialog.user.username, error: null },
        role: { value: dialog.user.role, error: null },
        email: { value: dialog.user.email, error: null },
        first_name: { value: dialog.user.first_name, error: null },
        last_name: { value: dialog.user.last_name, error: null }, 
        phone: { value: dialog.user.phone, error: null },
        comments: { value: dialog.user.comments, error: null },
        password_current: { value: "", error: null },
        password_new: { value: "", error: null },
        password_confirm: { value: "", error: null }
      })
    }
    setFormError(null);
  }, [dialog.active]);

  useEffect(() => {
    if (
      formError &&
      Boolean(userData.email.value) &&
      Boolean(userData.username.value) &&
      Boolean(userData.role.value) &&
      !Boolean(userData.email.error) &&
      !Boolean(userData.username.error) &&
      !Boolean(userData.role.error)
    ) {
      setFormError(null);
    }
  }, [userData]);

  function editUserData( field, value ) {
    const editedUserData = userData;
    switch (field) {
      case "USERNAME": editedUserData.username.value = value;        
        break;
      case "ROLE": editedUserData.role.value = value;        
        break;
      case "EMAIL": editedUserData.email.value = value;        
        break;
      case "FIRST_NAME": editedUserData.first_name.value = value;        
        break;
      case "LAST_NAME": editedUserData.last_name.value = value;        
        break;
      case "PHONE": editedUserData.phone.value = value;        
        break;
      case "COMMENTS": editedUserData.comments.value = value;        
        break;
      case "PASSWORD_CURRENT": editedUserData.password_current.value = value;        
        break;
      case "PASSWORD_NEW": editedUserData.password_new.value = value;        
        break;
      case "PASSWORD_CONFIRM": editedUserData.password_confirm.value = value;        
        break;
      default: return
    };
    setUserData({...editedUserData});
  }

  function validateInput(field) {
    return new Promise(( resolve, reject )=> {
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const editedUserData = userData
      switch (field) {

        case "USERNAME" :
          if ( userData.username.value.length < 1 ) {
            editedUserData.username.error = "Required Field";
          } 
          else if ( dialog.mode === "REGISTER" && users.find(user => user.username === userData.username.value)) {
            editedUserData.username.error = "User already exists.";
          }
          else {
            editedUserData.username.error = null;
          };
          break;

        case "ROLE" :
          if ( userData.role.value.length < 1 ) {
            editedUserData.role.error = "Required Field";
          }
          else if ( userData.role.value != "ADMIN" && userData.role.value != "USER" ) {
            editedUserData.role.error = "Invalid Selection";
          }
          // else if ( userData.role.value === "USER" && users.filter(user => user.role === "ADMIN" ).length === 1 ) {
          //   console.log(users.filter(user => user.role === "ADMIN" ).length)
          //   editedUserData.role.error = "Cannot reassign last administrator as a user.";
          // }
          else {
            editedUserData.role.error = null;
          }
          break;

        case "EMAIL" :
          if ( userData.email.value.length < 1 ) {
            editedUserData.email.error = "Required Field";
          } else if ( !userData.email.value.match(validRegex) ) {
            editedUserData.email.error = "Please enter a valid email address.";
          } else {
            editedUserData.email.error = null;
          };
          break;

        case "PASSWORD_CURRENT" :
          if ( userData.password_current.value.length < 1 ) {
            editedUserData.password_current.error = "Required Field";
          } else {
            editedUserData.password_current.error = null;
          };
          break;

        case "PASSWORD_NEW" :
          if ( userData.password_new.value.length < 1 ) {
            editedUserData.password_new.error = "Required Field";
          } 
          else if ( userData.password_confirm.value && userData.password_new.value != userData.password_confirm.value ) {
            editedUserData.password_new.error = "Passwords do not match.";
            editedUserData.password_confirm.error = "Passwords do not match.";
          }
          else {
            editedUserData.password_new.error = null;
            editedUserData.password_confirm.error = null;
          };
          break;

        case "PASSWORD_CONFIRM" :
          if ( userData.password_confirm.value.length < 1 ) {
            editedUserData.password_confirm.error = "Required Field";
          } 
          else if ( userData.password_new.value != userData.password_confirm.value ) {
            editedUserData.password_new.error = "Passwords do not match.";
            editedUserData.password_confirm.error = "Passwords do not match.";
          }
          else {
            editedUserData.password_new.error = null;
            editedUserData.password_confirm.error = null;
          };
          break;

        default:
          reject(false);
      }
      setUserData({...editedUserData});
      resolve(true);
    })
  };

  async function validateForm(mode) {

    if ( mode === "EDIT" ) {
      await validateInput("EMAIL");
      await validateInput("USERNAME");
      await validateInput("ROLE");
    }

    if ( mode === "CHANGE_PASSWORD" ) {
      await validateInput("PASSWORD_CURRENT");
      await validateInput("PASSWORD_NEW");
      await validateInput("PASSWORD_CONFIRM");
    }

    if (      
      !Boolean(userData.email.error) &&
      !Boolean(userData.username.error) &&
      !Boolean(userData.role.error) &&
      !Boolean(userData.password_current.error) &&
      !Boolean(userData.password_new.error) &&
      !Boolean(userData.password_confirm.error)
    ) {
      return true;
    }
    else {
      return false;
    }
  }

  function editUser(event) {
    event.preventDefault();
    validateForm("EDIT").then((result)=> {
      if (result) {
        dispatch({ type: "LOADING_TRUE" });
        resetDialog(false, dialog.mode, dialog.user);
        setTimeout(() => {
          dispatch({
            type: "EDIT_USER",
            payload: {
                id: dialog.user.id,
                username: userData.username.value,
                email: userData.email.value,
                role: userData.role.value,
                first_name: userData.first_name.value,
                last_name: userData.last_name.value,
                phone: userData.phone.value,
                comments: userData.comments.value
            },
          });
          resetDialog(false, "", {});
        }, server.loading_duration);
      }
      else {
        setFormError("Please resolve errors before continuing.");
      };
    })
  };

  function deleteUser() {
    resetDialog(false, dialog.mode, dialog.user);
    dispatch({ type: "LOADING_TRUE" });
    setTimeout(() => {
      dispatch({
        type: 'DELETE_USER',
        payload: dialog.user
      })
      resetDialog(false, "", {});
    }, server.loading_duration);
  }

  function changePassword() {
    dispatch({ type: "LOADING_TRUE" });
    resetDialog(false, dialog.mode, dialog.user);
    setTimeout(() => {
      dispatch({
        type: 'CHANGE_USER_PASSWORD',
        payload: {
          username: dialog.user.username,
          password_current: userData.password_current,
          password_new: userData.password_new
        }
      })
      resetDialog(false, "", {});
    }, server.loading_duration);
  }

  return (
    <>

      { dialog.mode === "EDIT" && 

        <UsersDialogEdit 
          dialog={dialog} 
          resetDialog={resetDialog} 
          userData={userData} 
          editUserData={editUserData} 
          validateInput={validateInput} 
          editUser={editUser}
          formError={formError}
        />

      }

      { dialog.mode === "CHANGE_PASSWORD" && 

        <UsersDialogPassword
          dialog={dialog} 
          resetDialog={resetDialog} 
          userData={userData} 
          editUserData={editUserData} 
          validateInput={validateInput} 
          changePassword={changePassword}
          formError={formError}
        />

      }

      { dialog.mode === "DELETE" && 

        <UsersDialogDelete 
          dialog={dialog} 
          resetDialog={resetDialog} 
          deleteUser={deleteUser}
        />

      }






    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default UsersDialog;