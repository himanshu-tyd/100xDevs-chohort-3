import { useState } from 'react'
import Notification from './Notification'
import Count from './Count'

function App() {

  return (
    <>
    {/* <ToggleMessage/> */}
    {/* <Notification/> */}


<Count/>

    </>
  )
}

export default App


const ToggleMessage=()=>{
  const [toggle,setToggle]=useState(false)

  const handleToggle=()=>{
    setToggle(pre=>!pre)
  }

  
    return (
      <>
      <p>{toggle  ? "this render on true state": "this is renderd on false state" }</p>
      <button onClick={handleToggle} > Render text</button>
      </>
    
  )
}