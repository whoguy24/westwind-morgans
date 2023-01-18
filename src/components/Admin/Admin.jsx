///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../Admin/Admin.css';

import { useNavigate } from 'react-router-dom';

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

            </div>

        </>
    );
}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default Users;