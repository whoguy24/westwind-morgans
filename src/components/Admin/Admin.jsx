///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Admin/Admin.css';

import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import Toast from "../Toast/Toast";
import Loading from "../Loading/Loading";

// Import MUI Components
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function Users() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const server = useSelector(store => store.server);

    function handleLinkClick(route) {
        dispatch({ type: "LOADING_TRUE" });
        setTimeout(() => {
            dispatch({ type: "LOADING_FALSE" });
            navigate(route);
        }, server.loading_duration);
    }

    // Render DOM
    return (
        <>
        
            <div id="admin">

                <Card className="admin-card" onClick={()=>handleLinkClick("/users")}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200px"
                            image={"/assets/static/profile.png"}
                        />
                        <div className="admin-card-label">
                            <Typography className="admin-card-label-text">Users</Typography>
                        </div>
                    </CardActionArea>
                </Card>

                <Card className="admin-card" onClick={()=>handleLinkClick("/users")}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200px"
                            image={"/assets/static/profile.png"}
                        />
                        <div className="admin-card-label">
                            <Typography className="admin-card-label-text">Horses</Typography>
                        </div>
                    </CardActionArea>
                </Card>

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