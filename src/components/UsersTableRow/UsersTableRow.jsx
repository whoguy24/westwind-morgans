///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UsersTableRow/UsersTableRow.css';

// Import Libraries
import { useState } from 'react';

// Import Custom Components

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function UsersTableRow({user}) {

  const [ editMode, setEditMode ] = useState(false);

  const [userData, setUserData] = useState({
    firstName: {value:user.first_name, error:null},
    lastName: {value:user.last_name, error:null}, 
    email: {value:user.email, error:null},
    phone: {value:user.phone, error:null},
    username: {value:user.username, error:null},
    role: {value:user.role, error:null}
  });

  function editUserData( field, value ) {
    const editedUserData = userData;
    switch (field) {
      case "FIRST_NAME": editedUserData.firstName.value = value;        
        break;
      case "LAST_NAME": editedUserData.lastName.value = value;        
        break;
      case "EMAIL": editedUserData.email.value = value;        
        break;
      case "PHONE": editedUserData.phone.value = value;        
        break;
      case "USERNAME": editedUserData.username.value = value;        
        break;
      case "ROLE": editedUserData.role.value = value;        
        break;
      default: return
    };
    setUserData({...editedUserData});
  }

  return (
    <>
      <tr id="users-table-row">

        { !editMode ?

          <div>
            <div id="users-table-row-group1">
                <Typography className="users-table-row-text-large">{user.username}</Typography>
                <Typography className="users-table-row-text-alias">{`(${user.first_name} ${user.last_name})`}</Typography>
                { user.role === "ADMIN" && <Typography className="users-table-row-text-alias">(Administrator)</Typography> }
                <div id="users-table-row-button-group">
                  <Button id="users-table-row-button" disableRipple onClick={()=>setEditMode(true)}>Edit</Button>
                </div>
            </div> 
            <div id="users-table-row-group2">
              <Typography className="users-table-row-text">{user.email}</Typography>
              <Typography className="users-table-row-text">{user.phone}</Typography>
            </div>
          </div>

          :

          <div id="users-table-row-editable">
            <div id="users-table-row-editable-group1">
              <TextField 
                className="users-table-row-text-input"
                label="Username" 
                variant="standard"
                // error={Boolean(newUserData.firstName.error)}
                // helperText={newUserData.firstName.error} 
                value={userData.username.value} 
                onChange={(event)=>editUserData("USERNAME", event.target.value)}
                // onBlur={()=>validateInput("FIRST_NAME")}
              />
              <TextField 
                className="users-table-row-text-input"
                label="Email" 
                variant="standard"
                // error={Boolean(newUserData.firstName.error)}
                // helperText={newUserData.firstName.error} 
                value={userData.email.value} 
                onChange={(event)=>editUserData("EMAIL", event.target.value)}
                // onBlur={()=>validateInput("FIRST_NAME")}
              />
              <TextField 
                className="users-table-row-text-input"
                label="First Name (Optional)" 
                variant="standard"
                // error={Boolean(newUserData.firstName.error)}
                // helperText={newUserData.firstName.error} 
                value={userData.firstName.value} 
                onChange={(event)=>editUserData("FIRST_NAME", event.target.value)}
                // onBlur={()=>validateInput("FIRST_NAME")}
              />
              <TextField 
                className="users-table-row-text-input"
                label="Last Name (Optional)" 
                variant="standard"
                // error={Boolean(newUserData.firstName.error)}
                // helperText={newUserData.firstName.error} 
                value={userData.lastName.value} 
                onChange={(event)=>editUserData("LAST_NAME", event.target.value)}
                // onBlur={()=>validateInput("FIRST_NAME")}
              />
              <TextField 
                className="users-table-row-text-input"
                label="Phone (Optional)" 
                variant="standard"
                // error={Boolean(newUserData.firstName.error)}
                // helperText={newUserData.firstName.error} 
                value={userData.phone.value} 
                onChange={(event)=>editUserData("Phone", event.target.value)}
                // onBlur={()=>validateInput("FIRST_NAME")}
              />
              <Select
                className="users-table-row-text-input"
                variant="standard"
                label="Role"
                // error={Boolean(newUserData.role.error)}
                // helperText={newUserData.role.error} 
                value={userData.role.value} 
                onChange={(event)=>editUserData("ROLE", event.target.value)}
                // onBlur={()=>validateInput("ROLE")}
              >
                <MenuItem value={"USER"}>USER</MenuItem>
                <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
              </Select>
              
              
            </div>
            <div id="users-table-row-editable-group2">
              <Button id="users-table-row-button" disableRipple onClick={()=>setEditMode(false)}>Cancel</Button>
              <Button id="users-table-row-button" disableRipple onClick={()=>setEditMode(false)}>Done</Button>
            </div>
          </div>

        }
            
      </tr>
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default UsersTableRow;