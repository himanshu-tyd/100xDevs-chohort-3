import { useState } from 'react'
import Notification from './Notification'
import Count from './Count'
import NavBar from '../../9.1-REACT-BASICS/REACT-PART-2/src/NavBar'
import ClocUnmountedLogic from '../../9.1-REACT-BASICS/REACT-PART-2/src/ClocUnmountedLogic'

function App() {

  return (
    <>
    {/* <ToggleMessage/> */}
    {/* <Notification/> */}
    {/* <Count/> */}
    {/* <NavBar/> */}
      <ClocUnmountedLogic/>
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