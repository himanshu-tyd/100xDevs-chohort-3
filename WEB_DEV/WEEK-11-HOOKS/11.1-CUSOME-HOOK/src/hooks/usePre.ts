import { useEffect, useRef } from "react";

export const usePre = (value) => {
  const preval = useRef();

  useEffect(() => {
    preval.current = value;
  }, [value]);

  return preval.current;
};
