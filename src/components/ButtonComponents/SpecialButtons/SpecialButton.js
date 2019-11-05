import React from "react";

import { specials } from '../../../data';
import { Specials } from './Specials';

export const SpecialButton = () => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Specials propPass={specials} />
    </>
  );
};
