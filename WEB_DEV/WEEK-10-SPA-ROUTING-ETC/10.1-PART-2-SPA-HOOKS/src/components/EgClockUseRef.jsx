import React, { useEffect, useRef, useState } from "react";

const EgClockUseRef = () => {
  const [time, setTime] = useState(1);
  const [clock, setClock] = useState(null);
  const spanRef = useRef(null);

  const handleStart = () => {
    console.log("handleStart Called")
    const time = setInterval(() => {
      
      setTime((pre) => pre + 1);
      console.log("clock is running");
    }, 1000);

    setClock(time);
  };

  const hanldeStop = () => {
    clearInterval(clock);
  };

  console.log("componetn rendering");

  return (
    <div>
      <span>{time}</span>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={hanldeStop}>Stop</button>
      </div>
    </div>
  );
};

export default EgClockUseRef;
