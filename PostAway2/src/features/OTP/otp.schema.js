import mongoose from "mongoose";

export const otpSchema=new mongoose.Schema({
    otp:{
        type:String,
        required:true
    },
    verification:{
        type:String,
        enum:['Verified','Not Verified']
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
});