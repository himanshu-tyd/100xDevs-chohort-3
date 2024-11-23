// function setTimeoutPromisefied(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve,duration)
//     })
// }

// function callback(){
//     console.log('1s passed')
// }

// setTimeoutPromisefied(3000).then(callback)

// callback hell

// setTimeout(() => {
//     console.log('hi')
//     setTimeout(()=>{
//         console.log('hello 5s')
//         setTimeout(()=>{
//             console.log('10s passed')
//         },5000)
//     },3000)
// }, 2000);
//poromise chaing function call

// let str="HIMANSHU"

// let seprateArray=str.split("").sort().join() //delemiter  is used  to seprarte the string

// console.log(seprateArray)

function setTimeoutPromisefied(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function sovle() {
  console.log("hi");
 await setTimeoutPromisefied(1000);
  console.log("Hello");
  await setTimeoutPromisefied(3000);
  console.log("3s hello");
  await  setTimeoutPromisefied(5000);
  console.log("5s hello");
}

sovle();

console.log("after solve function");
