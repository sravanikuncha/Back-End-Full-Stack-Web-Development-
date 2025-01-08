import mongoose from "mongoose";
import { commentSchema } from "./comment.schema.js";
import { postSchema } from "../Post/post.schema.js";

const commentDBModel=mongoose.model('Comment',commentSchema);
const postDBModel=mongoose.model('Post',postSchema);

export class CommentRepository{
    
    async getCommentsForPostRepository(postId){
        try{
            
            const commentResp=await commentDBModel.find({post:postId});
            return { success: true, res: commentResp };
       }catch(error){
        console.log(error);
        return { success: false, error: { statusCode: 400, msg: error } };
       }
    }
    
    async addCommentForPostRepository(commentData){
        try{
            const commentResp=new commentDBModel(commentData);
            await commentResp.save();
            
            //update comment count in post Database
            const postId=commentData.post;
            await postDBModel.findByIdAndUpdate(postId,{$inc:{comments:1}});

            return { success: true, res: commentResp };
       }catch(error){
        console.log(error);
        return { success: false, error: { statusCode: 400, msg: error } };
       }
    }
       
    async deleteCommentForPostRepository(commentId){
        try{
            const commentResp=await commentDBModel.findByIdAndDelete(commentId);
            
            //decrement comment count in post
            const postId=commentResp.post;
            await postDBModel.findByIdAndUpdate(postId,{$inc:{comments:-1}});
            return { success: true, res: commentResp };
       }catch(error){
        console.log(error);
        return { success: false, error: { statusCode: 400, msg: error } };
       }
    }
    
    async updateCommentForPostRepository(commentId,comment){
        try{
            console.log(comment);
            const commentResp=await commentDBModel.findByIdAndUpdate(commentId,{comment:comment},{new:true});
            if(!commentResp){
                return { success: false, error: { statusCode: 400, msg: "No Comments present " } };
            }
            return { success: true, res: commentResp };
       }catch(error){
        console.log(error);
        return { success: false, error: { statusCode: 400, msg: error } };
       }
    }
}