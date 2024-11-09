const fs=require('fs')

function readTheFile(sendData){
    fs.readFile('a.txt','utf-8',(error,data)=>{
        sendData(data)
    })
}


function readFile(){
    return new Promise(readTheFile)
}

function callback(content){
    console.log(content)
}


const p=readFile()

p.then(callback)