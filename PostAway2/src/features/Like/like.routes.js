import express from 'express';
import { LikeController } from './like.controller.js';

const likeControllerObj=new LikeController();

const likeRouter=express.Router();

likeRouter.get('/:id',(req,res,next)=>{
    likeControllerObj.getLikePostOrComment(req,res,next)
});

likeRouter.post('/toggle/:id',(req,res,next)=>{
    likeControllerObj.toggleLikePostOrComment(req,res,next)
});

export {likeRouter};