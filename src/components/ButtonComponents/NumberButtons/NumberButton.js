import React from "react";

import { numbers } from '../../../data';
import { Numbers } from './Numbers';

export const NumberButton = (  {portToButtonsPropPass} ) => {

  let passToMap = {
    numbers: numbers,
    state: portToButtonsPropPass
  }


  return (
    <>
      {/* Display a button element rendering the data being passed down
        from the parent container on props */}
        <>
          <Numbers anyVarNameForProp={passToMap} />
        </>
    </>
  );
};
