import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const baseUrl=process.env.DB_URL;

export const configDB=async ()=>{
  try{
    await mongoose.connect(baseUrl);
    console.log("connected to mongo DB");
  }catch(err){
    console.log("Error connecting to MOngo DB");
    console.log(err);
  }
}