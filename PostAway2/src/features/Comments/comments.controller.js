import { CommentModel } from "./comment.model.js";
import { customErrorHandler } from "../../middlewares/errorHandler.middleware.js";
import { logger } from "../../middlewares/logger.middleware.js";

export class CommentController{

    constructor(){
        this.commentModelObj=new CommentModel();
    }
    
    async getCommentsForPost(req,res,next){
        const commentResp=await this.commentModelObj.getCommentsForPostModel(req);
        logger.info(`getCommentsForPost commentResp=${commentResp}`);
        if(commentResp.success){
            res.status(200).json({
                 success: true,
                 res: commentResp.res,
               });
          }else{
            next(new customErrorHandler(commentResp.error.statusCode, commentResp.error.msg));
        }
    }
    
    async addCommentForPost(req,res,next){
        const commentResp=await this.commentModelObj.addCommentForPostModel(req);
        logger.info(`addCommentForPost commentResp=${commentResp}`);
        if(commentResp.success){
            res.status(200).json({
                 success: true,
                 res: commentResp.res,
               });
          }else{
            next(new customErrorHandler(commentResp.error.statusCode, commentResp.error.msg));
        }
    }
       
    async deleteCommentForPost(req,res,next){
        const commentResp=await this.commentModelObj.deleteCommentForPostModel(req);
        logger.info(`deleteCommentForPost commentResp=${commentResp}`);
        if(commentResp.success){
            res.status(200).json({
                 success: true,
                 msg:"Deleted Comment Successfully",
                 res: commentResp.res,
               });
          }else{
            next(new customErrorHandler(commentResp.error.statusCode, commentResp.error.msg));
        }
    }
    
    async updateCommentForPost(req,res,next){
        const commentResp=await this.commentModelObj.updateCommentForPostModel(req);
        logger.info(`updateCommentForPost commentResp=${commentResp}`);
        if(commentResp.success){
            res.status(200).json({
                 success: true,
                 msg:" Comment Updated Successfully",
                 res: commentResp.res,
               });
          }else{
            next(new customErrorHandler(commentResp.error.statusCode, commentResp.error.msg));
        }
    }
}