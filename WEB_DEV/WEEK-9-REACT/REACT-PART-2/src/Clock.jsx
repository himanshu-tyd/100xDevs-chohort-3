import React, { useEffect, useState } from "react";

const Clock = () => {
  const [count, setCount] = useState(0);


  //guard for our inteval that it doesn't re-render in every re-render
  useEffect(() => {
    setInterval(() => {
      setCount(count=>count+1);
    }, 1000);
  }, []);

  const handleIncrease = () => {};

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Start Clock</button>
    </>
  );
};

export default Clock;
