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

import Toast from "../Toast/Toast";
import Loading from "../Loading/Loading";

import UsersChangePassword from "../UsersChangePassword/UsersChangePassword";
import UsersDelete from "../UsersDelete/UsersDelete";
import UsersEdit from "../UsersEdit/UsersEdit";
import UsersRegister from "../UsersRegister/UsersRegister";
import UsersTable from "../UsersTable/UsersTable";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyIcon from '@mui/icons-material/Key';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Users() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux Store Variables
  const users = useSelector(store => store.users);
  const server = useSelector(store => store.server);

  const [dialog, setDialog] = useState(null);
  const [user, setUser] = useState(null);

  function openDialog(dialog, user) {
    setUser(user);
    setDialog(dialog);
  }

  useEffect(() => {
    dispatch({ type: "LOADING_TRUE" });
    setTimeout(() => {
      dispatch({type:"FETCH_USERS"})
    }, server.loading_duration);
  }, []);

//   const columns = [
//     { field: "first_name", headerName: "First Name", width: 120 },
//     { field: "last_name", headerName: "Last Name", width: 120 },
//     { field: "email", headerName: "Email", width: 300 },
//     { field: "username", headerName: "Username", width: 120 },
//     {
//       field: 'delete',
//       headerName: 'Delete',
//       width: 80,
//       align: 'center',
//       renderCell: (cellValues) => {
//           return (
//               <IconButton color='error' onClick={() => { openDialog("DELETE", cellValues.row) }}>
//                   <DeleteIcon />
//               </IconButton>
//           );
//       }
//   },
//   {
//     field: 'change_password',
//     headerName: 'Password',
//     width: 80,
//     align: 'center',
//     renderCell: (cellValues) => {
//         return (
//             <IconButton color='error' onClick={() => { openDialog("CHANGE_PASSWORD", cellValues.row) }}>
//                 <KeyIcon />
//             </IconButton>
//         );
//     }
// }
//   ];

  return (
    <>
      <div id ="users">

        <div id="users-toolbar">
          <Button className="users-button" onClick={()=>navigate(-1)}>Back</Button>
          <Button className="users-button" onClick={()=>openDialog("REGISTER", null)}>Add User</Button>
        </div>

        <UsersTable users={users}/>

        {/* <div id="users-grid">
          <DataGrid
            rows={users}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            disableSelectionOnClick={true}
            sx={{
              boxShadow: 2,
              border: 0.5,
              borderColor: "var(--color-accent-300)",
              borderRadius: 0,
            }}
          />
        </div> */}

        <UsersChangePassword dialog={dialog} user={user} setDialog={()=>setDialog()} setUser={()=>setUser()} />
        <UsersDelete dialog={dialog} user={user} setDialog={()=>setDialog()} setUser={()=>setUser()} />
        <UsersEdit dialog={dialog} user={user} setDialog={()=>setDialog()} setUser={()=>setUser()} />
        <UsersRegister dialog={dialog} user={user} setDialog={()=>setDialog()} setUser={()=>setUser()} />

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