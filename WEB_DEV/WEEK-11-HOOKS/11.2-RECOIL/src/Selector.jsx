import React from "react";
import { useSetRecoilState } from "recoil";
import { counterAtomSelector, isEvenAtom } from "./store/atoms/Selector";
import { useRecoilValue } from "recoil";

const Selector = () => {
  const counter = useRecoilValue(counterAtomSelector);

  return (
    <div>
      <span>{counter}</span>
      <ButtonHanlders />
      <IsEven />
    </div>
  );
};

const ButtonHanlders = () => {
  const setCounter = useSetRecoilState(counterAtomSelector);

  return (
    <div>
      <button onClick={() => setCounter((c) => c + 1)}>increase</button>
      <button onClick={() => setCounter((c) => c - 1)}>decrease</button>
    </div>
  );
};

const IsEven = () => {
  const isEvenVal = useRecoilValue(isEvenAtom);


  console.log("trigger render");

  return <div>{ isEvenVal ? "true" : "false"}</div>;
};

export default Selector;
