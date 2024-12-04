const express=require('express')

function series(n){
    let ans=0
    for(let i=1; i<n ; i++){
        ans=ans+i
    }
    return ans
}


const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    const n=req.query.n
    const result=series(n)
    res.send(result.toString())
})

app.listen(3000,()=>{
    console.log('server is running')
})