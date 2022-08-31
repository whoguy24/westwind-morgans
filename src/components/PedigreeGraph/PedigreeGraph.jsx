///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../PedigreeGraph/PedigreeGraph.css';

// Import Libraries
import { useState, useEffect } from "react";
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

// Import MUI Components
import Typography from '@mui/material/Typography';

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function PedigreeGraph({horse}) {

  const sire = horse.parents?.filter(parent=>parent.sex == "Male")[0];
  const dam = horse.parents?.filter(parent=>parent.sex == "Female")[0];

  const sireSire = horse.parents?.filter(parent=>parent.sex == "Male")[0]?.parents?.filter(parent=>parent.sex == "Male")[0];
  const sireDam = horse.parents?.filter(parent=>parent.sex == "Male")[0]?.parents?.filter(parent=>parent.sex == "Female")[0];

  const damSire = horse.parents?.filter(parent=>parent.sex == "Female")[0]?.parents?.filter(parent=>parent.sex == "Male")[0];
  const damDam = horse.parents?.filter(parent=>parent.sex == "Female")[0]?.parents?.filter(parent=>parent.sex == "Female")[0];
  
  // Render DOM
  return (
    <>

      { horse.id && 

        <>

          <div id="pedigree-column1">

            <div className="pedigree-cell">

              <NavLink to={`/${horse.route}/${horse.id}`}>
                <Typography className="pedigree-cell-text-large">{horse.name}</Typography>
              </NavLink>

            </div>

            <div id="pedigree-column2">

                <div className="pedigree-cell">

                  { sire ?

                    <>

                      { sire.visible === true ?

                        <NavLink to={`/${sire.route}/${sire.id}`}>
                          <Typography className="pedigree-cell-text">{sire.name}</Typography>
                        </NavLink>

                      :

                        <a className="pedigree-cell-text" href={sire.pedigree_url} target="_blank">{sire.name}</a>

                      }

                    </>

                    :

                    <>
                      <Typography className="pedigree-cell-text-disabled">N/A</Typography>
                    </>

                  }

                </div>

                <div className="pedigree-cell">

                  { dam ?

                    <>

                      { dam.visible === true ?

                        <NavLink to={`/${dam.route}/${dam.id}`}>
                          <Typography className="pedigree-cell-text">{dam.name}</Typography>
                        </NavLink>

                      :

                        <a className="pedigree-cell-text" href={dam.pedigree_url} target="_blank">{dam.name}</a>

                      }

                    </>

                    :

                    <>
                      <Typography className="pedigree-cell-text-disabled">N/A</Typography>
                    </>

                  }

                </div>
              
            </div>

            <div id="pedigree-column3">

              <div className="pedigree-cell">

                { sireSire ?

                  <>

                    { sireSire.visible === true ?

                      <NavLink to={`/${sireSire.route}/${sireSire.id}`}>
                        <Typography className="pedigree-cell-text">{sireSire.name}</Typography>
                      </NavLink>

                    :

                      <a className="pedigree-cell-text" href={sireSire.pedigree_url} target="_blank">{sireSire.name}</a>

                    }

                  </>

                  :

                  <>
                    <Typography className="pedigree-cell-text-disabled">N/A</Typography>
                  </>

                }

              </div>

              <div className="pedigree-cell">

                { sireDam ?

                  <>

                    { sireDam.visible === true ?

                      <NavLink to={`/${sireDam.route}/${sireDam.id}`}>
                        <Typography className="pedigree-cell-text">{sireDam.name}</Typography>
                      </NavLink>

                    :

                      <a className="pedigree-cell-text" href={sireDam.pedigree_url} target="_blank">{sireDam.name}</a>

                    }

                  </>

                  :

                  <>
                    <Typography className="pedigree-cell-text-disabled">N/A</Typography>
                  </>

                }

              </div>

              <div className="pedigree-cell">

                { damSire ?

                  <>

                    { damSire.visible === true ?

                      <NavLink to={`/${damSire.route}/${damSire.id}`}>
                        <Typography className="pedigree-cell-text">{damSire.name}</Typography>
                      </NavLink>

                    :

                      <a className="pedigree-cell-text" href={damSire.pedigree_url} target="_blank">{damSire.name}</a>

                    }

                  </>

                  :

                  <>
                    <Typography className="pedigree-cell-text-disabled">N/A</Typography>
                  </>

                }

              </div>


              <div className="pedigree-cell">

                { damDam ?

                  <>

                    { damDam.visible === true ?

                      <NavLink to={`/${damDam.route}/${damDam.id}`}>
                        <Typography className="pedigree-cell-text">{damDam.name}</Typography>
                      </NavLink>

                    :

                      <a className="pedigree-cell-text" href={damDam.pedigree_url} target="_blank">{damDam.name}</a>

                    }

                  </>

                  :

                  <>
                    <Typography className="pedigree-cell-text-disabled">N/A</Typography>
                  </>

                }

              </div>
              
            </div>

          </div>

        </>

      }


    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default PedigreeGraph;