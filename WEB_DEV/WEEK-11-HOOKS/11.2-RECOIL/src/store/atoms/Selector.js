import { selector } from "recoil";
import { atom } from "recoil";

export const counterAtomSelector = atom({
  key: "counteNumber",
  default: 0,
});

export const isEvenAtom = selector({
  key: "isEven",
  get: ({ get }) => {
    const count = get(counterAtomSelector);
    if (count == 5) {
      return true;
    } else {
      return false;
    }
  },
});
