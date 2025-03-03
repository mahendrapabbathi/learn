import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRouter.js";
import "dotenv/config"

//app config
const app = express()
const port = 4000;

//middleware
app.use(express.json());
app.use(cors())
app.use("/api/user",userRouter)

// db connection
connectDB();

app.get("/",(req,res)=>{
    res.send("Api working")
})

app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})