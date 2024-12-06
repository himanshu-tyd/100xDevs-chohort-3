const express=require('express')

const app=express()


app.get('/sum',(req,res)=>{
   const {x,y}=req.query

    res.status(200).json({ans:x+y})
})
app.get('/divide',(req,res)=>{
   const {x,y}=req.query

    res.status(200).json({ans:x%y})
})
app.get('/substract',(req,res)=>{
   const {x,y}=req.query

    res.status(200).json({ans:x-y})
})
app.get('/multiply',(req,res)=>{
   const {x,y}=req.query

    res.status(200).json({ans:x*y})
})


 
app.listen(3000)

