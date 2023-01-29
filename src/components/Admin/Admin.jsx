///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Admin/Admin.css';

import { useNavigate } from 'react-router-dom';

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

    function openLink() {
        navigate("/users")
        dispatch({ 
            type: 'SET_SERVER', 
            payload: {
              loading:true, 
              duration:server.duration,
              result:server.result,
              toast_open:server.toast_open,
              toast_autoHideDuration:server.toast_autoHideDuration, 
              toast_severity:server.toast_severity, 
              toast_variant:server.toast_variant,
              toast_description:server.toast_description
            }
        });
        setTimeout(() => {
            navigate("/users");
        }, server.duration);
    }

    // Render DOM
    return (
        <>
        
            <div id="admin">

                <Card className="admin-card" onClick={()=>navigate("/users")}>
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

                <Card className="admin-card" onClick={()=>navigate("/users")}>
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