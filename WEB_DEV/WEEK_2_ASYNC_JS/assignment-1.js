//Try to create a promisified version of setTimeOut
// fetch
//fs.FileRead

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
