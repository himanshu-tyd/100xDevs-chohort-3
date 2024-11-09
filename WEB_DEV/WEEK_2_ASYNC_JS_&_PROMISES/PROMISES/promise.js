// function setTimeoutPromisified(ms) {
//   return new Promise();   //return new promise
// }

// let p = setTimeoutPromisified(3000);
// console.log(p);

// function callback() {
//   console.log("3 seconds have passed");
// }

// setTimeout(callback, 3000);
// function waitFor3s(resolve){
//     setTimeout(resolve, 3000)
// }

// function setTimeoutPromisified(resolve){
//     return new Promise(waitFor3s)
// }

// function main(){
//     console.log("Main is called")
// }

// setTimeoutPromisified().then(main) //Promise based on approch

// setTimeout(main, 3000) //callback base approch

// function random(resolve) {
//   //resolve is also fucntion
//   setTimeout(resolve, 3000);
// }

// let p = new Promise(random);
// console.log(p);

// function main() {
//   console.log("promise succeded");
// }

// p.then(main);

