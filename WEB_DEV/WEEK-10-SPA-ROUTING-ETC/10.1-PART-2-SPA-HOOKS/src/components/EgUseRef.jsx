import React, { useRef } from 'react'

const EgUseRef = () => {
 
  
  const nameRef=useRef(null)

  const handleFocus=()=>{
      nameRef.current.focus()
  }
 
  return (
    <div>
    SignUp
    <input ref={nameRef} id='name' type='text' placeholder='enter name' />
    <input  id="password" placeholder='enter password'  type='password' /> 
    <button onClick={handleFocus}>Submit</button>     
</div>
  )
}

export default EgUseRef