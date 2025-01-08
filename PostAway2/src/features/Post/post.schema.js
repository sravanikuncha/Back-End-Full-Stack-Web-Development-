import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    caption:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    likes:{
        type:Number
    },
    comments:{
        type:Number
    }
});
export {postSchema};