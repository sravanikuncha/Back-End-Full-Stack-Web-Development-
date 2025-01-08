import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    comment:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
         ref:'User'
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
         ref:'Post'
    },
    likes:{
        type:Number
    }
});

export {commentSchema};