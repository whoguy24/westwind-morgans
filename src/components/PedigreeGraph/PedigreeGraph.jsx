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

          <div id="pedigree-cell1">
            <PedigreeCell horse={horse}/>
          </div>

          <div id="pedigree-cell2">
            <PedigreeCell horse={sire}/>
          </div>

          <div id="pedigree-cell3">
            <PedigreeCell horse={dam}/>
          </div>

          <div id="pedigree-cell4">
            <PedigreeCell horse={sireSire}/>
          </div>

          <div id="pedigree-cell5">
            <PedigreeCell horse={sireDam}/>
          </div>

          <div id="pedigree-cell6">
            <PedigreeCell horse={damSire}/>
          </div>

          <div id="pedigree-cell7">
            <PedigreeCell horse={damDam}/>
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