import React, { useState } from "react";
import "./App.css";


/*IMPORT RENDED BUTTONS*/
import { NumberButton } from './components/ButtonComponents/NumberButtons/NumberButton';
import { OperatorButton } from './components/ButtonComponents/OperatorButtons/OperatorButton.js';
import { SpecialButton } from './components/ButtonComponents/SpecialButtons/SpecialButton.js';

import { Display } from './components/DisplayComponents/Display.js';

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";


import { Numbers } from './components/ButtonComponents/NumberButtons/Numbers.js';


function App() {

  const [numberState, setNumberState] = useState(0);
  /*pas down with props*/
  let portToButtons = {
    numberState: numberState,
    setNumberState: setNumberState
  };

  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <Logo />{/*this is a render*/}
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display propStatetoDisplay={numberState} />

        <div className="buttonbox">
          <div className="left-container">
            <SpecialButton />
            <NumberButton portToButtonsPropPass={portToButtons} />
          </div>
          <div className="right-container">
            <OperatorButton />
          </div>
        </div>





      </div>
    </div>
  );
}

export default App;
