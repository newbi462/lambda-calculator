import React from "react";

import { operators } from '../../../data';
import { Operators } from './Operators';

export const OperatorButton = () => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <Operators propPass={operators} />

    </>
  );
};
