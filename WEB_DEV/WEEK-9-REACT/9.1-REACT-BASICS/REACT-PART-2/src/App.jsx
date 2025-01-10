import { useEffect, useState } from "react";
import Counter from "./Counter";

const App = () => {
  const [isVisable, setIsVisable] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
   const interval= setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return ()=>clearInterval(interval)

  }, [count]);

  return (
    <div>
      {/* {isVisable &&  <Clock/>} */}

      <Counter count={count} />
    </div>
  );
};

export default App;
