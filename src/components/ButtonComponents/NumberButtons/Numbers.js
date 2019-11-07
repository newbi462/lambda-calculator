import React from "react";

//import any components needed
// example of import from data.js. Note all the ../
// This is how we move through folders.
/*
import { numbers } from '../../../data'
*/
//Import your array data to from the provided data file
// INSTRUNTIONS SAID HERE BUT THEY MEAN OTHER FILE import { numbers } from '../../../data';
import { portToButtons } from '../../../App';

export const Numbers = ({anyVarNameForProp}) => {
{/*props = a all such props the {the prop name, with out it you need prop.datasetvar}*/}

  // STEP 2 - add the imported data to state
  return (
    <>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

{/*       <h3>
        {props.anyVarNameForProp}   WOULD BE HOW TO USE OF NOT {} import above
       </h3>*/}

       {anyVarNameForProp.numbers.map(function(item) {
         return <button className={"but"+item} onClick={() => anyVarNameForProp.state.setNumberState(item)}>{item}</button>;
       })}



    </>
  );
};

/*onClick={() => portToButtons.setNumberState(item)}*/
