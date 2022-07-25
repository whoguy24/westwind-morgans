///////////////////////////////////////////////////////
///// IMPORT LIBRARIES ////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Admin/Admin.css';

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Users() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const users = useSelector(store => store.users);

    useEffect(() => {
        dispatch({ type: 'FETCH_USERS' });
      }, []);

    function logOut() {
        dispatch({ type: 'LOGOUT' })
        navigate('/login')
    }

    // Render DOM
    return (
        
        <div id="admin-background">
            <Button onClick={logOut}>Log Out</Button>


            <table>
                <thead>
                    <tr>
                        <td>Username</td>
                        <td>Email Address</td>
                        <td>Password</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user)=>{
                            return (
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td><button>Change</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                            )
                        })
                    }


                </tbody>
                <tfoot></tfoot>
            </table>



        </div>

    );
}

// Export Component Function
export default Users;