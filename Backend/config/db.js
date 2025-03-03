import mongoose  from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://pabbathimahendra8:wp32IjTKF3iG8gXW@cluster1.b6wac.mongodb.net/Learnify').then(()=>console.log("DB Connected"));

}