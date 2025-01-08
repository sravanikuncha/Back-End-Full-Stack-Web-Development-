import express from 'express';
import { PostController } from './post.controller.js';
const postControllerObj=new PostController();
import { auth } from '../../middlewares/auth.middleware.js';
import { upload } from '../../middlewares/fileUpload.middleware.js';

const postRouter=express.Router();

postRouter.use(auth);

postRouter.get("/all",(req,res,next)=>{
    postControllerObj.getAllPosts(req,res,next)
});

postRouter.get("/:postId",(req,res,next)=>{
    postControllerObj.getPostById(req,res,next)
});

postRouter.get("/user/:userId",(req,res,next)=>{
    postControllerObj.getUserPosts(req,res,next)
});

postRouter.post("/",upload.single('avatar'),(req,res,next)=>{
    postControllerObj.createNewPost(req,res,next)
});

postRouter.delete("/:postId",(req,res,next)=>{
    postControllerObj.deletePostById(req,res,next)
});

postRouter.put("/:postId",upload.single('avatar'),(req,res,next)=>{
    postControllerObj.updatePostById(req,res,next)
});

export {postRouter};