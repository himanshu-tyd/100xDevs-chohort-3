import React, { useState } from "react";
import { useCounter } from "./hooks/useCounter";
import { usePre } from "./hooks/usePre";
import "./App.css";
import Searach from "./Searach";

const App = () => {
  // const { counter, increase } = useCounter();
  const [state, setState] = useState(0);
  const pre = usePre(state);

  return (
    <>
      <button onClick={() => setState(state + 1)}>increase</button>
      {/* <span onClick={increase}>{counter}</span> */}
      <div>current vale{state}</div>
      <div>last value was {pre}</div>

      <Searach/>
    </>
  );
};

export default App;
