import { FriendShipModel } from "./friend.model.js";
import { customErrorHandler } from "../../middlewares/errorHandler.middleware.js";
import { logger } from "../../middlewares/logger.middleware.js";

export class FriendShipController{

    constructor(){
        this.friendshipModeLObj=new FriendShipModel();
    }

    async getUserFriends(req,res,next){
        const friendResp=await this.friendshipModeLObj.getUserFriendsModel(req);
        logger.info(`getUserFriends friendResp=${friendResp}`);
        if(friendResp.success){
          res.status(200).json({
               success: true,
               res:friendResp.res,
             });
        }else{
          next(new customErrorHandler(friendResp.error.statusCode, friendResp.error.msg));
      }
    }

    async getPendingRequests(req,res,next){
        const friendResp=await this.friendshipModeLObj.getPendingRequestsModel(req);
        logger.info(`getPendingRequests friendResp=${friendResp}`);
        if(friendResp.success){
          res.status(200).json({
               success: true,
               res:friendResp.res,
             });
        }else{
          next(new customErrorHandler(friendResp.error.statusCode, friendResp.error.msg));
      }
    }

    async toggleFriendship(req,res,next){
        const friendResp=await this.friendshipModeLObj.toggleFriendshipModel(req);
        logger.info(`toggleFriendship friendResp=${friendResp}`);
        if(friendResp.success){
          res.status(200).json({
               success: true,
               msg:friendResp.msg,
             });
        }else{
          next(new customErrorHandler(friendResp.error.statusCode, friendResp.error.msg));
      }
    }

    async acceptRejectRequest(req,res,next){
        const friendResp=await this.friendshipModeLObj.acceptRejectRequestModel(req);
        logger.info(`acceptRejectRequest friendResp=${friendResp}`);
        if(friendResp.success){
          res.status(200).json({
               success: true,
               msg:friendResp.msg,
             });
        }else{
          next(new customErrorHandler(friendResp.error.statusCode, friendResp.error.msg));
      }
    }

}