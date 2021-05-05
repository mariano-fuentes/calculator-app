import React from "react";
import Pad from "./Pad";

const NumberPad = () => {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className='number-pad'>
      <Pad buttons={buttons}></Pad>
    </div>
  );
};

export default NumberPad;
