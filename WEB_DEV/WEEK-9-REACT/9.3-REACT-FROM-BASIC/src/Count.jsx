import React, { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("code inside useEffect");
    const increment = () => {
      console.log("increment code");
      setCount(function (currenVal) {
        return currenVal + 1;
      });
    };
    setInterval(increment, 1000);
  }, []);

  return <div>{count}</div>;
};

export default Count;
