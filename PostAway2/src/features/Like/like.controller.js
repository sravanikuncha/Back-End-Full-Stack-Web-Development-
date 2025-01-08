import { LikeModel } from "./like.mode.js";
import { customErrorHandler } from "../../middlewares/errorHandler.middleware.js";
import { logger } from "../../middlewares/logger.middleware.js";

export class LikeController{

    constructor(){
        this.likeModelObj=new LikeModel();
    }

    async getLikePostOrComment(req,res,next){
        const likeResp=await this.likeModelObj.getLikePostOrCommentModel(req);
        logger.info(`getLikePostOrComment likeResp=${likeResp}`);
        if(likeResp.success){
            res.status(200).json({
                 success: true,
                 res: likeResp.res,
               });
          }else{
            next(new customErrorHandler(likeResp.error.statusCode, likeResp.error.msg));
        }
    }

    async toggleLikePostOrComment(req,res,next){
        const likeResp=await this.likeModelObj.toggleLikePostOrCommentModel(req);
        logger.info(`toggleLikePostOrComment likeResp=${likeResp}`);
        const like=req.query.Like;
        if(likeResp.success){
            res.status(200).json({
                 success: true,
                 msg:`Liked ${like}`
               });
          }else{
            next(new customErrorHandler(likeResp.error.statusCode, likeResp.error.msg));
        }
    }
}