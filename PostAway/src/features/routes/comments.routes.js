import express from "express";


// user imports
import { CommentController } from "../controllers/comments.controller.js";
import { auth } from "../middleware/authcheck.middleware.js";

const commentControllerObj=new CommentController();

const commentRouter=express.Router();

commentRouter.use(auth);

commentRouter.get("/:id",commentControllerObj.getAllCommentsForPost);

commentRouter.post("/:id",commentControllerObj.addCommentToPost);

commentRouter.delete("/:id",commentControllerObj.deleteCommentForPostById);

commentRouter.put("/:id",commentControllerObj.updateCommentForPostById);

export {commentRouter};