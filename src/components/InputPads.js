import React from 'react'
import NumberPad from "./NumberPad";
import OperationsPad from './OperationsPad'
import Button from './Button'

const InputPads = () => {
  return (
    <div className='input-pad'>
      <NumberPad></NumberPad>
      <OperationsPad></OperationsPad>
      {/* <Button output='Reset'></Button>
      <Button output='='></Button> */}
    </div>
  )
}

export default InputPads;