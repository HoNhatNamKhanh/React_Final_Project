import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://buiduchoang2101:12345678901Hoang@cluster0.t5uurod.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}