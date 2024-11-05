//Try to create a promisified version of setTimeOut
// fetch
//fs.FileRead
const fs=require('fs')

const promise=new Promise((resolve, reject)=>{
    setTimeout(() => {
           if(resolve){
            return console.log('foo')
           }

           if(reject){
            return console.log('reject')
           }
    }, (1000));
})

promise.then((data)=>console.log(data))


//fs read


let content=fs.readFileSync("./b.txt","utf8");
console.log(content);

