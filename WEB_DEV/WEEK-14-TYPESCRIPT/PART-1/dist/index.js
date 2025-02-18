"use strict";
// interface Persion {
//   name: string;
//   age: number;
//   greet: (name: string) => void;
// }
// class Emplooye implements Persion {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greet(name: string) {
//     console.log(name);
//   }
//}
// enum Direction{
//   UP="UP",
//   DOWN="DOWN",
//   LEFT="LEFT",
//   RIGHT="RIGHT",
// }
// function doSomething(keyPress: Direction){
//   console.log(keyPress)
// }
// doSomething(Direction.RIGHT)
function getFirstElement(element, index) {
    return element[index];
}
console.log(getFirstElement([3, 3, 2, "hello"], 3));
