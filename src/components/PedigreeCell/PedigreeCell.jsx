///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../PedigreeCell/PedigreeCell.css';

// Import Libraries
import { NavLink } from 'react-router-dom';

// Import MUI Components
import Typography from '@mui/material/Typography';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function PedigreeCell({horse}) {
  
  // Render DOM
  return (

    <>

          <div className="pedigree-cell">

            { horse ?

              <>

                { horse.visible === true ?

                  <NavLink to={`/${horse.type}/${horse.id}`}>
                    <Typography className="pedigree-cell-text">{horse.name}</Typography>
                  </NavLink>

                :
                  <a className="pedigree-cell-text" href={horse.pedigree_url} target="_blank">{horse.name}</a>
                }

              </>

              :

              <>
                <Typography className="pedigree-cell-text-disabled">N/A</Typography>
              </>

            }

          </div>

    </>


  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default PedigreeCell;