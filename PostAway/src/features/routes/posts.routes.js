import express from "express";


// user imports
import { PostController } from "../controllers/posts.controller.js";
import { auth } from "../middleware/authcheck.middleware.js";
import { upload } from "../middleware/fileUpload.middleware.js";

const postControllerObj=new PostController();

const postRouter=express.Router();

postRouter.use(auth);

postRouter.get("/all",postControllerObj.getAllPosts);

postRouter.get("/:id",postControllerObj.getPostById);

postRouter.get("/",postControllerObj.getPostsBasedOnUser);

postRouter.post("/",upload.array('imageUrl'),postControllerObj.createNewPost);

postRouter.delete("/:id",postControllerObj.deletePostById);

postRouter.put("/:id",upload.array('imageUrl'),postControllerObj.updatePostById);

export {postRouter};