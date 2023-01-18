///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Users/Users.css';

// Import MUI Components
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';

// Import Libraries
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Users() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux Store Variables
  const user = useSelector(store => store.user);
  const users = useSelector(store => store.users);
  const error = useSelector(store => store.errors);

  const [addUserDialogActive, setAddUserDialogActive] = useState(false);

  const [addUserFirstName, setAddUserFirstName] = useState("");
  const [addUserLastName, setAddUserLastName] = useState("");
  const [addUserEmail, setAddUserEmail] = useState("");
  const [addUserUsername, setAddUserUsername] = useState("");
  const [addUserRole, setAddUserRole] = useState("USER");
  const [addUserPassword, setAddUserPassword] = useState("");
  const [addUserConfirmPassword, setAddUserConfirmPassword] = useState("");

  useEffect(() => {
      if(!error?.code && user?.id) {
          dispatch({ type: 'FETCH_USERS' });
      } else {
          navigate('/login')
      }
  }, []);

  const columns = [
    { field: "first_name", headerName: "First Name", width: 120 },
    { field: "last_name", headerName: "Last Name", width: 120 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "username", headerName: "Username", width: 120 },
  ];


  function ValidateEmail(mail) 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
    {
      return (true)
    }
      alert("You have entered an invalid email address!")
      return (false)
  }
  







  return (
    <>
      <div id ="users">

        <div id="users-toolbar">
          <Button className="users-button" onClick={()=>navigate(-1)}>Back</Button>
          <Button className="users-button" onClick={()=>setAddUserDialogActive(true)}>Add User</Button>
        </div>

        <div id="users-grid">
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick={true}
            hideFooter={true}
            sx={{
              boxShadow: 2,
              border: 0.5,
              borderColor: "var(--color-accent-300)",
              borderRadius: 0,
            }}
          />
        </div>

        <Dialog open={addUserDialogActive} onClose={()=>setAddUserDialogActive(false)}>
          <DialogTitle id="users-dialog-title">New User Registration</DialogTitle>
            <DialogContent>
            <div id="users-add-user-dialog-form">

              <div className="users-dialog-textfield-group">
                <TextField 
                  className="users-dialog-textfield" 
                  label="First Name" 
                  variant="standard" 
                  value={addUserFirstName} 
                  onChange={(event)=>setAddUserFirstName(event.target.value)} 
                />
                <TextField 
                  className="users-dialog-textfield" 
                  label="Last Name" 
                  variant="standard"
                  value={addUserLastName} 
                  onChange={(event)=>setAddUserLastName(event.target.value)} 
                />
              </div>

              <div className="users-dialog-textfield-group">
                { false ?
                  <TextField 
                    className={"users-dialog-textfield"}
                    label="Email" 
                    variant="standard" 
                    value={addUserEmail} 
                    onChange={(event)=>setAddUserEmail(event.target.value)} 
                  />
                :
                  <TextField 
                    error
                    color="warning"
                    helperText="This thing is wrong."
                    className={"users-dialog-textfield-error"}
                    label="Email" 
                    variant="standard" 
                    value={addUserEmail} 
                    onChange={(event)=>setAddUserEmail(event.target.value)} 
                  />
                }
              </div>
              
              <div className="users-dialog-textfield-group">
                <TextField 
                  className="users-dialog-textfield" 
                  label="Username" 
                  variant="standard" 
                  value={addUserUsername} 
                  onChange={(event)=>setAddUserUsername(event.target.value)} 
                />

                <Select
                  labelId="demo-simple-select-label"
                  className="users-dialog-textfield"
                  variant="standard"
                  value={addUserRole} 
                  label="Role"
                  onChange={(event)=>setAddUserRole(event.target.value)} 
                >
                  <MenuItem value={"USER"}>USER</MenuItem>
                  <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
                </Select>

              </div>
              
              <div className="users-dialog-textfield-group">
                <TextField 
                  className="users-dialog-textfield" 
                  label="Password" 
                  variant="standard" 
                  value={addUserPassword} 
                  onChange={(event)=>setAddUserPassword(event.target.value)} 
                />
              </div>

              <div className="users-dialog-textfield-group">
                <TextField 
                  className="users-dialog-textfield" 
                  label="Confirm Password" 
                  variant="standard" 
                  value={addUserConfirmPassword} 
                  onChange={(event)=>setAddUserConfirmPassword(event.target.value)} 
                />
              </div>

            </div>
          </DialogContent>
          <DialogActions>
            <Button className="users-dialog-button" onClick={()=>setAddUserDialogActive(false)}>Cancel</Button>
            <Button className="users-dialog-button" onClick={()=>setAddUserDialogActive(false)}>Register</Button>
          </DialogActions>
        </Dialog>

      </div>
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Users;