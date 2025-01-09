import React, { useState } from "react";
import Clock from "./Clock";

const App = () => {

  const [count, setCount]=useState(0)

  const handleIncrement = () => {
    setCount(count+1)
  }

  return (
    <div>
      <Clock/>
    </div>
  );
};

export default App;
