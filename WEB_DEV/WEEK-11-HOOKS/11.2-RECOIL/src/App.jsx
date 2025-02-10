import React from 'react'
import RecoilDemo from './RecoilDemo'
import { useEffect } from 'react'
import { useState } from 'react'
import MemorizeComponent from './MemorizeComponent'
import Selector from './Selector'


const App = () => {

  // const [count,setCount]=useState(1)

  // useEffect(()=>{
  //   setInterval(()=>{
  //       setCount(c=>c+1)
  //   },2000)
  // },[])

  return (
    <>
      {/* <MemorizeComponent/> */}

      {/* <span>{count}</span> */}
      {/* <RecoilDemo/> */}

      <Selector/>
    </>
  )
}

export default App