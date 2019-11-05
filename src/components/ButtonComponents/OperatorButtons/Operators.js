import React from "react";

//import any components needed

//Import your array data to from the provided data file


export const Operators = (  {propPass}  ) => {
  // STEP 2 - add the imported data to state
  return (
    <>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {propPass.map(function(item) {
         return <button>{item.char}</button>;
       })}
    </>
  );
};
