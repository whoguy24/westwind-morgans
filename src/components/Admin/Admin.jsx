///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Admin/Admin.css';

// Import Libraries
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Import MUI Components
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Users() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [addUserDialog, setAddUserDialog] = useState(false);

    // Redux Store Variables
    const user = useSelector(store => store.user);
    const error = useSelector(store => store.errors);

    useEffect(() => {
        if(!error?.code && user?.id) {
            dispatch({ type: 'FETCH_USERS' });
        } else {
            navigate('/login')
        }
    }, []);

    function logOut() {
        dispatch({ type: 'LOGOUT' })
        navigate('/login')
    }

    const handleDialogButton = () => {
        setAddUserDialog(!addUserDialog)
    };

    // Render DOM
    return (
        <>
        
            <div id="admin-background">
                <Button onClick={logOut}>Log Out</Button>
                <Button onClick={handleDialogButton}>Add User</Button>
            </div>

            <Dialog open={addUserDialog} onClose={handleDialogButton}>

                <DialogContent>
                    <DialogContentText>Add a User</DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button id="dialog-close-button" onClick={handleDialogButton} autoFocus>Cancel</Button>
                </DialogActions>

            </Dialog>

        </>
    );
}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Users;