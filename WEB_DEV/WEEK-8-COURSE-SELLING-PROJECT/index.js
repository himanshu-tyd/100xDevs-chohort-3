import express from "express"
import dotevn from 'dotenv'
import cookieParser from "cookie-parser"
import connectDB from "./database/connection.js"
import userRoute from "./routes/user.route.js"
import courseRoute from './routes/course.route.js'
import adminRoute from './routes/admin.route.js'

dotevn.config()


const port=8000
const app=express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/users',userRoute)
app.use('/api/admin', adminRoute) 
app.use('/api/course' , courseRoute )



app.listen(port ,()=>{
    connectDB()
    console.log(`server is running at port ${port}`)
    
})