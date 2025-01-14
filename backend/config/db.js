import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abskm4:ZnN7yKGtXmV0Zevy@cluster0.okmxy.mongodb.net/food-del2').then(()=>console.log("DB Connected"))
}