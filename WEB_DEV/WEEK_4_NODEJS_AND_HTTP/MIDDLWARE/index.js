const express=require('express')

const port=3000
const app=express()

app.use(express.json())


// const isAgeValid=(age)=>{
//     if(age>=16){
//         return true
//     }else{
//         return false
//     }
// }

const middlwareIsValid=(req,res ,next)=>{
    if(req.query.age>=14){
        next()
    }else{
        res.json({message:'not age enough yet'})
    }
}

app.use(middlwareIsValid)

app.get('/ride',(req,res)=>{
        res.json({
            message:`You good to go`
        })

})

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})