import React, { useEffect } from "react";

const Counter = ({ count }) => {
  useEffect(() => {
    console.log("component mounted");

    return () => console.log("component unmounted");
  }, []);


  useEffect(()=>{
    console.log('value has changed')
  },[count])

  return (
    <div>
      <h3>{count}</h3>
    </div>
  );
};

export default Counter;
