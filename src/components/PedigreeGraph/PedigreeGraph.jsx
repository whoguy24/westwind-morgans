///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../PedigreeGraph/PedigreeGraph.css';

// Import Libraries
import { useEffect } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

// Import MUI Components
import Typography from '@mui/material/Typography';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function PedigreeGraph({horse}) {

  // Render DOM
  return (
    <>

        <div id="pedigree-column1">

          <div className="pedigree-cell">

            { horse.id &&

            <NavLink to={horse.visible ? `/stallions/${horse.id}` : horse.pedigree_url}>
              <Typography className="pedigree-cell-text-large">{horse.name}</Typography>
            </NavLink>

            }

          </div>


          <div id="pedigree-column2">

            {/* { horse.parents.sire &&

              <div className="pedigree-cell">
                <NavLink to="/stallions">
                  <Typography className="pedigree-cell-text">{horse.parents.sire.name}</Typography>
                </NavLink>
              </div>

            } */}

            {/* { horse.parents.dam &&

              <div className="pedigree-cell">
                <NavLink to="/stallions">
                  <Typography className="pedigree-cell-text">{horse.parents.dam.name}</Typography>
                </NavLink>
              </div>

            } */}
            
          </div>

          {/* <div id="pedigree-column3">

          { horse.parents.sire.parents.sire &&

            <div className="pedigree-cell">
              <NavLink to="/stallions">
                <Typography className="pedigree-cell-text">{horse.parents.sire.parents.sire.name}</Typography>
              </NavLink>
            </div>

          }

          { horse.parents.sire.parents.dam &&

            <div className="pedigree-cell">
              <NavLink to="/stallions">
                <Typography className="pedigree-cell-text">{horse.parents.sire.parents.dam.name}</Typography>
              </NavLink>
            </div>

          }

          { horse.parents.dam.parents.sire &&

            <div className="pedigree-cell">
              <NavLink to="/stallions">
                <Typography className="pedigree-cell-text">{horse.parents.dam.parents.sire.name}</Typography>
              </NavLink>
            </div>
          }

          { horse.parents.dam.parents.dam &&

            <div className="pedigree-cell">
              <NavLink to="/stallions">
                <Typography className="pedigree-cell-text">{horse.parents.dam.parents.dam.name}</Typography>
              </NavLink>
            </div>
          }
            
          </div> */}

        </div>


    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default PedigreeGraph;