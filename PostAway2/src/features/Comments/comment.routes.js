import express from 'express';
import { CommentController } from './comments.controller.js';
import { auth } from '../../middlewares/auth.middleware.js';

const commentControllerObj=new CommentController();

const commentRouter=express.Router();

commentRouter.use(auth);

commentRouter.get("/:postId",(req,res,next)=>{
    commentControllerObj.getCommentsForPost(req,res,next)
});

commentRouter.post("/:postId",(req,res,next)=>{
    commentControllerObj.addCommentForPost(req,res,next)
});

commentRouter.delete("/:commentId",(req,res,next)=>{
    commentControllerObj.deleteCommentForPost(req,res,next)
});

commentRouter.put("/:commentId",(req,res,next)=>{
    commentControllerObj.updateCommentForPost(req,res,next)
});

export {commentRouter};