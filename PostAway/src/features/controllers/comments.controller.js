
import { CommentModel } from "../models/comments.model.js";
import { logger } from "../middleware/logger.middleware.js";


export class CommentController{

    getAllCommentsForPost=(req,res)=>{
        const userId=req.cookies.userId;
        const postId=req.params.id;
        logger.info("getAllCommentsForPost postId ="+postId+" userId="+userId);
        const commentsForPost=CommentModel.getCommentsByPostId(userId,postId);
        if(commentsForPost.length==0){
            res.status(200).send("No Comments");
        }else{
            res.status(200).send(commentsForPost);
        }
    }

    addCommentToPost=(req,res)=>{
        const userId=req.cookies.userId;
        const {content}=req.body;
        const postId=req.params.id;
        logger.info("addCommentToPost postId ="+postId+" userId="+userId+" content="+content);
        CommentModel.addCommentToPostModel(userId,postId,content);
        res.status(201).send("Comment added to the post");
    }

    deleteCommentForPostById=(req,res)=>{
        const userId=req.cookies.userId;
        const {postId}=req.body;
        const commentId=req.params.id;
        logger.info("deleteCommentForPostById postId ="+postId+" userId="+userId+" commentId="+commentId);
        const isDeleted=CommentModel.deleteCommentById(userId,postId,commentId);
        if(!isDeleted){
            res.status(200).send("Comment Not Present")
        }else{
            res.status(200).send("Comment Deleted");
        }
    }

    updateCommentForPostById=(req,res)=>{
        const userId=req.cookies.userId;
        const {postId,content}=req.body;
        const id=req.params.id;
        logger.info("updateCommentForPostById postId ="+postId+" userId="+userId+" id="+id+" content="+content);
        const isUpdated=CommentModel.updateCommentById(userId,postId,content,id);
        if(!isUpdated){
            res.status(200).send("No Comment to Update");
        }else{
            res.status(200).send("Comment Updated");
        }
    }
}