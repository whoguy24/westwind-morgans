///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../UsersDialogEdit/UsersDialogEdit.css';

// Import Custom Components

// Import MUI Components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function UsersDialogDelete({ dialog, resetDialog, deleteUser }) {

  return (
    <>

        <Dialog open={ dialog.active && dialog.mode === "DELETE" } onClose={()=>resetDialog(false, "", {})}>

          <DialogTitle id="users-dialog-title">Delete User</DialogTitle>

          <DialogContent>
            Are you sure you want to permanently delete this user? <br /> <br />
          </DialogContent>

          <DialogActions>

            <div id="users-dialog-buttons">

              <Button className="dialog-button-cancel" onClick={()=>resetDialog(false, "", {})}>Cancel</Button>
              <Button className="dialog-button-confirm" onClick={deleteUser}>Delete</Button>

            </div>

          </DialogActions>

        </Dialog>




    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default UsersDialogDelete;