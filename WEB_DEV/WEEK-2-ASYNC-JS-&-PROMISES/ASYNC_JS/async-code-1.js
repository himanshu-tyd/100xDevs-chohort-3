const fs=require('fs')
function printData(err, data){
    console.log(err, data)
}


fs.readFile('a.txt','utf-8',printData)
fs.readFile('b.txt', 'utf-8', printData)

console.log('done!')
