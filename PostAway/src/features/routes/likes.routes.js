import express from "express";


// user imports
import { LikeController } from "../controllers/likes.controller.js";
import { auth } from "../middleware/authcheck.middleware.js";

const likeControllerObj=new LikeController();


const likeRouter=express.Router();

likeRouter.use(auth);

likeRouter.get("/:postid",likeControllerObj.getLikesForPost);

likeRouter.put("/toggle/:postid",likeControllerObj.toggleLikeForPost);


export {likeRouter};