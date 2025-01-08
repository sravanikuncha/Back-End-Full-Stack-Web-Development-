import mongoose from "mongoose";
import { postSchema } from "./post.schema.js";

const postDBModel=mongoose.model("Post",postSchema);

export class PostRepostory{

    async getAllPostsRepository(){
        try{
            const postResp=await postDBModel.find();
            return { success: true, res: postResp };
       }catch(error){
        console.log(error);
        return { success: false, error: { statusCode: 400, msg: error } };
       }
    }


    async getPostByIdRepository(postId){
        try{
            const postResp=await postDBModel.findById(postId);
            return { success: true, res: postResp };
       }catch(error){
        console.log(error);
        return { success: false, error: { statusCode: 400, msg: error } };
       }
    }

    
    async getUserPostsRepository(userId){
        try{
            const postResp=await postDBModel.find({user:userId});
            return { success: true, res: postResp };
       }catch(error){
        console.log(error);
        return { success: false, error: { statusCode: 400, msg: error } };
       }
    }

    
    async createNewPostRepository(postData){
       try{
            const postResp=new postDBModel(postData);
            await postResp.save();
            return { success: true, res: postResp };
       }catch(error){
        console.log(error);
        return { success: false, error: { statusCode: 400, msg: error } };
       }
    }

    
    async deletePostByIdRepository(postId){
        try{
            const postResp=await postDBModel.findByIdAndDelete(postId);
            return { success: true, res: postResp };
       }catch(error){
        console.log(error);
        return { success: false, error: { statusCode: 400, msg: error } };
       }
    }

    
    async updatePostByIdRepository(postId,updates){
        try{
            const postResp=await postDBModel.findByIdAndUpdate(postId,updates,{new:true});
            return { success: true, res: postResp };
       }catch(error){
        console.log(error);
        return { success: false, error: { statusCode: 400, msg: error } };
       }
    }
}