
import { LikeModel } from "../models/likes.model.js";
import { logger } from "../middleware/logger.middleware.js";

export class LikeController{

    getLikesForPost=(req,res)=>{
        const userId=req.cookies.userId;
        const postId=req.params.postid;
        logger.info("getLikesForPost userId="+userId+" postId="+postId);
        const result=LikeModel.getLikeForPostModel(postId,userId);
        if(!result){
            res.status(200).send("0 Likes");
        }else{
            res.status(200).send(result+" likes");
        } 
    }

    toggleLikeForPost=(req,res)=>{
        const userId=req.cookies.userId;
        const postId=req.params.postid;
        logger.info("toggleLikeForPost userId="+userId+" postId="+postId);
        const result=LikeModel.toggleLikeForPostModel(userId,postId);
        if(result){
            res.status(200).send("Like Added")
        }else{
            res.status(200).send("Like Removed")
        }
    }
}