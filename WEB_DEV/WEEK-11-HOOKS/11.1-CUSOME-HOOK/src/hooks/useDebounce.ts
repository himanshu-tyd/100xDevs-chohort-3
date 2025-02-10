import { useRef } from "react";

export const useDebounce = () => {
  let clock;
  function fetch() {
    console.log("sending requrest");
  }

  const debounce = () => {
    clearTimeout(clock);

    console.log('clock start')
    clock = setTimeout(() => {
      fetch();
    }, 3000);
  };

  return debounce;
};
