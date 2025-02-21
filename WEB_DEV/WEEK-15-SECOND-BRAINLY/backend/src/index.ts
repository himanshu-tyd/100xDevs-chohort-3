import express, {Request ,Response} from "express"
import userRouter from "./routes/user.route"
import dotevn from 'dotenv'
import { connectDB } from "./database"


dotevn.config()


const app=express()
const port=8000

app.use(express())
app.use(express.json())

app.get('/', (req:Request , res: Response )=>{
    res.send('Hello word')
})

app.use('/api/v1/auth', userRouter)


app.listen(port,()=>{
    connectDB()
    console.log(`SERVER IS RUNNING AT ${port}`);
})