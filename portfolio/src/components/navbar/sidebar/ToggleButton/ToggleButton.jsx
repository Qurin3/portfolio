import React from 'react'

const ToggleButton = ({setOpen}) => {
  return (
    <button onClick={()=>setOpen(prev => !prev)}>whatever</button>
  )
}

export default ToggleButton
