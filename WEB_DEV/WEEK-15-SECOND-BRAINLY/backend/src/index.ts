import express, {Request ,Response} from "express"
import dotevn from 'dotenv'
import { connectDB } from "./database"
import userRouter from "./routes/user.route"
import contentRoter  from'./routes/content.route'
import cookieParser from "cookie-parser"


dotevn.config()


const app=express()
const port=8000

app.use(express())
app.use(express.json())
app.use(cookieParser())

app.get('/', (req:Request , res: Response )=>{
    res.send('Hello word')
})

app.use('/api/v1/auth', userRouter)
app.use('/api/v1/content',contentRoter )


app.listen(port,()=>{
    connectDB()
    console.log(`SERVER IS RUNNING AT ${port}`);
})