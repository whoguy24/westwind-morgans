///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Users/Users.css';

// Import MUI Components
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Users() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
  ];
  
  const rows = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];

  return (
    <>
      <div id ="users">
        <div id="users-toolbar">
          <Button id="users-add-user-button">Add User</Button>
        </div>

        <div id="users-grid">

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick={true}
            hideFooterPagination={true}
            hideFooterSelectedRowCount={true}
            sx={{
              boxShadow: 2,
              border: 0.5,
              borderColor: "var(--color-accent-300)",
              borderRadius: 0,
            }}
          />

        </div>

        

      </div>
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Users;