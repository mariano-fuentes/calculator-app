import React, { useState } from "react";
import Screen from './Screen'
import InputPads from './InputPads'

const Calculator = () => {
  const [ num1, setNum1 ] = useState('')
  const [ num2, setNum2 ] = useState('')
  const [ operation, setOperation ] = useState('')

  return (
    <div className='calculator'>
      <Screen></Screen>
      <InputPads></InputPads>
    </div>
  );
};

export default Calculator;
