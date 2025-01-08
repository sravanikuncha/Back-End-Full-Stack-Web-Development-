import { PostModel } from "./post.model.js";
import { customErrorHandler } from "../../middlewares/errorHandler.middleware.js";
import { logger } from "../../middlewares/logger.middleware.js";

export class PostController{
    
    constructor(){
        this.postModelObj=new PostModel();    
    }

    async getAllPosts(req,res,next){
        const postResp=await this.postModelObj.getAllPostsModel();
        logger.info(`getAllPosts postResp=${postResp}`);
        if(postResp.success){
            res.status(200).json({
                 success: true,
                 res: postResp.res,
               });
          }else{
            next(new customErrorHandler(postResp.error.statusCode, postResp.error.msg));
        }
    }


    async getPostById(req,res,next){
        const postResp=await this.postModelObj.getPostByIdModel(req);
        logger.info(`getPostById postResp=${postResp}`);
        if(postResp.success){
            res.status(200).json({
                 success: true,
                 res: postResp.res,
               });
          }else{
            next(new customErrorHandler(postResp.error.statusCode, postResp.error.msg));
        }
    }

    
    async getUserPosts(req,res,next){
        const postResp=await this.postModelObj.getUserPostsModel(req);
        logger.info(`getUserPosts postResp=${postResp}`);
        if(postResp.success){
            res.status(200).json({
                 success: true,
                 res: postResp.res,
               });
          }else{
            next(new customErrorHandler(postResp.error.statusCode, postResp.error.msg));
        }
    }

    
    async createNewPost(req,res,next){
        const userId=req.userId;
        const postResp=await this.postModelObj.createNewPostModel(userId,req);
        logger.info(`createNewPost postResp=${postResp}`);
        if(postResp.success){
            res.status(201).json({
                 success: true,
                 msg:"Post Created successfully",
                 res: postResp.res,
               });
          }else{
            next(new customErrorHandler(postResp.error.statusCode, postResp.error.msg));
        }
    }

    
    async deletePostById(req,res,next){
        const postResp=await this.postModelObj.deletePostByIdModel(req);
        logger.info(`deletePostById postResp=${postResp}`);
        if(postResp.success){
            res.status(200).json({
                 success: true,
                 msg:"Post Deleted successfully",
                 res: postResp.res,
               });
          }else{
            next(new customErrorHandler(postResp.error.statusCode, postResp.error.msg));
        }
    }

    
    async updatePostById(req,res,next){
        const postResp=await this.postModelObj.updatePostByIdModel(req);
        logger.info(`updatePostById postResp=${postResp}`);
        if(postResp.success){
            res.status(200).json({
                 success: true,
                 msg:"Post Udpdated successfully",
                 res: postResp.res,
               });
          }else{
            next(new customErrorHandler(postResp.error.statusCode, postResp.error.msg));
        }
    }
}