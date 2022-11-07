///////////////////////////////////////////////////////
///// IMPORT MODULES //////////////////////////////////
///////////////////////////////////////////////////////

// Import Stylesheets
import '../PedigreeGraph/PedigreeGraph.css';

import PedigreeCell from "../PedigreeCell/PedigreeCell";

///////////////////////////////////////////////////////
///// COMPONENT FUNCTION //////////////////////////////
///////////////////////////////////////////////////////

function PedigreeGraph({horse}) {

  const sire = horse.parents?.filter(parent=>parent.sex == "M")[0];
  const dam = horse.parents?.filter(parent=>parent.sex == "F")[0];

  const sireSire = horse.parents?.filter(parent=>parent.sex == "M")[0]?.parents?.filter(parent=>parent.sex == "M")[0];
  const sireDam = horse.parents?.filter(parent=>parent.sex == "M")[0]?.parents?.filter(parent=>parent.sex == "F")[0];

  const damSire = horse.parents?.filter(parent=>parent.sex == "F")[0]?.parents?.filter(parent=>parent.sex == "M")[0];
  const damDam = horse.parents?.filter(parent=>parent.sex == "F")[0]?.parents?.filter(parent=>parent.sex == "F")[0];
  
  // Render DOM
  return (
    <>

      { horse.id && 

        <div id="pedigree">

          <div id="pedigree-column1">
            
            <PedigreeCell horse={horse}/>

            <div id="pedigree-column2">
              <PedigreeCell horse={sire}/>
              <PedigreeCell horse={dam}/>
            </div>

            <div id="pedigree-column3">
              <PedigreeCell horse={sireSire}/>
              <PedigreeCell horse={sireDam}/>
              <PedigreeCell horse={damSire}/>
              <PedigreeCell horse={damDam}/>
            </div>

          </div>

        </div>

      }


    </>
  );

}

///////////////////////////////////////////////////////
///// EXPORT COMPONENT FUNCTION ///////////////////////
///////////////////////////////////////////////////////

export default PedigreeGraph;