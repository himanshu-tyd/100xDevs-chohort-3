// Q: Write a function that
// Reads the contents of a file
// Trims the extra space from the left and right
// Writes it back to the file


//callback Approch

const fs=require('fs')

function cleanFile(cb){
    fs.readFile('a.txt', 'utf-8',(error,data)=>{
        if(error){
            return console.log(error)
        }else{
            const docs=data.trim()
            console.log(docs)

            cb()
        }
    })
}

function done(){
    console.log("Operation done")
}

cleanFile(done)


//promisified approch


function clearFile(path){
    return new Promise((resolve)=>{
        fs.readFile(path, 'utf-8', (error,data)=>{
            let dt=data.trim()

            fs.writeFile(path,dt,()=>{
                resolve()
            })


        })
    })
}


async function main(){
    await clearFile('a.txt')
    console.log('opration done')
}
