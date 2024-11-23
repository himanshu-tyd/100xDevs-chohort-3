callback hell


setTimeout(()=>{
    console.log('hi')
},1000)

setTimeout(()=>{
    console.log('5s passed hi')

},5000)
setTimeout(()=>{
    console.log('10s passed hi')
    
},10000)