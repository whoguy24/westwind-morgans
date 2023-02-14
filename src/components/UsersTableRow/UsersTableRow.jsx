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

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function UsersTableRow({ user, resetDialog}) {

  return (
    <>
      <tr id="users-table-row">

        <td id="users-table-row-group1">

            <Typography className="users-table-row-text-large">{user.username}</Typography>

            { user.first_name && user.last_name && <Typography className="users-table-row-text-alias">{`(${user.first_name} ${user.last_name})`}</Typography> }

            { user.role === "ADMIN" && <Typography className="users-table-row-text-alias">(Administrator)</Typography> }

            <div id="users-table-row-button-group">
              <Button id="users-table-row-button" disableRipple onClick={()=>resetDialog(true, "EDIT", user)}>Edit</Button>
            </div>

        </td> 

        <td id="users-table-row-group2">

          <Typography className="users-table-row-text">{user.email}</Typography>

          { user.comments && <Typography className="users-table-row-text">{user.comments}</Typography> }

          { user.phone && <Typography className="users-table-row-text">{user.phone}</Typography> }
          
        </td>
            
      </tr>
    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default UsersTableRow;