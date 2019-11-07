import React from "react";

//import any components needed

//Import your array data to from the provided data file


export const Specials = ( {propPass}  ) => {
  // STEP 2 - add the imported data to state
  let specMath = (testValue) => {
    if (testValue === "C") {
      return propPass.state.setNumberState(0);
    }
    if (testValue === "+/-") {
      return propPass.state.setNumberState(propPass.state.numberState * -1);
    }
    if (testValue === "%") {
      return propPass.state.setNumberState(propPass.state.numberState * 100);
    }
  }

  return (
    <>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {propPass.specials.map(function(item) {
         return <button onClick={() => specMath(item)} className="specButton">{item}</button>;
       })}
    </>
  );
};
