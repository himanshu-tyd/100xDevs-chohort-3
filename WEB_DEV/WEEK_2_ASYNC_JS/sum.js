//find sum

function sum(a,b){
    return a+b
}

console.log(sum(5,6))

//find sum from 1 to n

function sumOfNumber(n){ 
    let count=0

    for(let i=0; i<=n ; i++){
        count+=i
    }

    return count
}

console.log(sumOfNumber(100))

//easy way to using math

function sumMath(n){
    
}

console.log(sumMath(100))

// 100*(100+1)=100*101=

//Read file I/O operations

const fs=require('fs')

const file1=fs.readFileSync("a.txt","utf-8")  // this asychornously
const file2=fs.readFile('b.txt', 'utf-8') // this synchrnously
console.log(file1)
console.log(file2)




