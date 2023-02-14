///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UsersTable/UsersTable.css';

// Import Custom Components
import UsersTableRow from "../UsersTableRow/UsersTableRow";

import List from '@mui/material/List';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function UsersTable({users, resetDialog}) {

  return (
    <>
      <table id="users-table">
        <tbody id="users-table-body">
          { users.map((user)=> {
              return(
                <UsersTableRow key={user.id} user={user} resetDialog={resetDialog} />
              )
          })}
        </tbody>
      </table>
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default UsersTable;