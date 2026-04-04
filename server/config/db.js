import mongoose from "mongoose";
export const ConnectDB = async()=>{
    const url = process.env.MONGO_DB_URL
  await mongoose.connect(url);
}