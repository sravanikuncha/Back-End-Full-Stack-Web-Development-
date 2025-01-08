import { PostModel } from "../models/posts.model.js";
import { logger } from "../middleware/logger.middleware.js";

export class PostController{

    getAllPosts=(req,res)=>{
        const posts=PostModel.getAllPostsModel();
        res.status(200).send(posts);
    }

    getPostById=(req,res)=>{
        const id=req.params.id;
        logger.info("getPostById id="+id);
        const postById=PostModel.getPostById(id);
        res.status(200).send(postById);
    }

    getPostsBasedOnUser=(req,res)=>{
        const userId=req.cookies.userId;
        logger.info("getPostById userId="+userId);
        const postsByUserId=PostModel.getPostBbyuserId(userId);        
        res.status(200).send(postsByUserId);
    }

    createNewPost=(req,res)=>{
        const userId=req.cookies.userId;
        const {caption}=req.body;
        const imageUrl=req.files;
        console.log("imageUrl"+imageUrl);
        logger.info("createNewPost userId="+userId+" caption="+caption+" nr of images uploaded ="+imageUrl.length);
        const postObj=PostModel.createNewPost(userId,caption,imageUrl);
        res.status(201).send("Post Created");
    }

    deletePostById=(req,res)=>{
        const id=req.params.id;
        logger.info("deletePostById id="+id);
        const postPresent=PostModel.deletePostById(id);
        if(!postPresent){
            res.status(200).send("No Post to delete");
        }
        else{
            res.status(200).send("Post Deleted");
        }
    }

    updatePostById=(req,res)=>{
        const id=req.params.id;
        const {caption}=req.body;
        const imageUrl=req.files;
        logger.info("updatePostById caption="+caption+" nr of images uploaded ="+imageUrl.length);
        const updatedPost=PostModel.updatePostById(id,caption,imageUrl);
        if(!updatedPost){
            res.status(204).send("No Content to Update")
        }else{
            res.status(200).send(updatedPost);
        }
    }
}