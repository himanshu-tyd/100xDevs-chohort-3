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
// }


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



//generics


// function getFirstElement<T>(element:T[] , index:number){
//   return element[index]
// }

// console.log(getFirstElement([3,3,2,"23"] ,3))







type User=string | number

let user: User= 'himanshu'

user=3

