import React, { useEffect, useState } from "react";

const ClocUnmountedLogic = () => {
  const [active, setActive] = useState(true);

  setInterval(() => {
    console.log(active);
    setActive((pre) => !pre);
  }, 5000);

  return <div>{active ? <Timer /> : "timer unmouted"}</div>;
};

export default ClocUnmountedLogic;

const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("<-clock is running times");
      setTime((pre) => pre + 1);
    }, 1000);

    //clearup fucntion

    return () => clearInterval(interval);
  }, []);
  return <div>{time}</div>;
};
