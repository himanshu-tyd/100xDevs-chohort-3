import React from "react";
import { memo } from "react";


const MemorizeComponent =() => {

    console.log('re-render')

  return (
    <div>MemorizeComponent</div>
  )
}

export default memo(MemorizeComponent)