import React from 'react'
import Pad from './Pad'

const OperationsPad = () => {
  const buttons = ['+','-','/','x']

  return (
    <div className='operations-pad'>
      <Pad buttons={buttons}></Pad>
    </div>
  )
}

export default OperationsPad;