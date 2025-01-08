import mongoose from "mongoose";
import { postSchema } from "../Post/post.schema.js";
import { commentSchema } from "../Comments/comment.schema.js";

const postDBModel=mongoose.model('Post',postSchema);
const commentDBModel=mongoose.model('Comment',commentSchema);

export class LikeRepository{

    async getLikePostOrCommentRepository(like,id){
        try{
            if(like=='Post'){
                const likeres=await postDBModel.findById(id).populate({
                    path: 'user',
                    select: { password: 0, token: 0, avatar: 0 }
                  });
                  console.log(likeres);
                return { success: true, res: likeres };
            }else if(like=='Comment'){
                const likeres=await commentDBModel.findById(id).populate('post').populate({
                    path: 'user',
                    select: { password: 0, token: 0, avatar: 0 }
                  });
                return { success: true, res: likeres };
            }
           
       }catch(error){
        console.log(error);
        return { success: false, error: { statusCode: 400, msg: error } };
       }
        
    }

    async toggleLikePostOrCommentRepository(like,id){
        try{
            if(like=='Post'){
                const likeres=await postDBModel.findByIdAndUpdate(id,{$inc:{likes:1}})
                return { success: true, res: likeres };
            }else if(like=='Comment'){
                const likeres=await commentDBModel.findByIdAndUpdate(id,{$inc:{likes:1}})
                return { success: true, res: likeres };
            }
           
       }catch(error){
        console.log(error);
        return { success: false, error: { statusCode: 400, msg: error } };
       }
    }
}