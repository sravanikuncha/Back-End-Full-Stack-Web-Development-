import { UserModel } from "./user.model.js";
import { logger } from "../../middlewares/logger.middleware.js";
import { customErrorHandler } from "../../middlewares/errorHandler.middleware.js";

export  class UserController{

     constructor(){
           this.userModelObj=new UserModel();
     }

     async registerUser(req,res,next){
          const userData=req.body;
          userData.avatar=req.file.filename;
          const userResp=await this.userModelObj.registerUserModel(userData);
          logger.info(`registerUser userResp=${userResp}`);
          if(userResp.success){
               res.status(201).send({
                    success: true,
                    msg: "user registration successful",
                    res: userResp.res,
                  });
          }
          else{
                console.log("sdskdn")
               next(new customErrorHandler(userResp.error.statusCode, userResp.error.msg));
          }
     }

     async signInUser(req,res,next){
          const data=req.body;
          logger.info(`signInUser req.body=${data}`)
          const userResp=await this.userModelObj.signInUserModel(req,res,data);
          logger.info(`signInUser userResp=${userResp}`);
          if(userResp.success){
               console.log(userResp)
               res.status(200).send({
                    success: true,
                    msg: "Logged in Successfully",
                    token:userResp.res
                  });
          }else{
               next(new customErrorHandler(userResp.error.statusCode, userResp.error.msg));
          }
     }

     async logoutUser(req,res,next){
          const resp=await this.userModelObj.logoutUserModel(res,req);
          logger.info(`logoutUser resp= ${resp}`);
          if(resp.success){
               res.send({ success: true, msg: resp.msg });
          }else{
               next(new customErrorHandler(userResp.error.statusCode, userResp.error.msg));
          }
     }

     async logoutAllDevices(req,res,next){
          //get the payload from cookies 
          const userId=req.userId;
          const resp=await this.userModelObj.logoutAllDevicesModel(res,req,userId);
          if(resp.success){
               res.send({ success: true, msg: resp.msg });
          }else{
               next(new customErrorHandler(userResp.error.statusCode, userResp.error.msg));
          }
     }
     

     async getUserDetails(req,res,next){
        const userId=req.params.userId;
        logger.info(` logoutAllDevices req.params=${req.params}`);
        const userResp=await this.userModelObj.getUserDetailsModel(userId);
        logger.info(` logoutAllDevices userResp=${userResp}`);
        if(userResp.success){
          res.status(200).send({
               success: true,
               res: userResp.res,
             });
        }else{
          next(new customErrorHandler(userResp.error.statusCode, userResp.error.msg));
      }
     }

     async getAllUserDetails(req,res,next){
          const userResp=await this.userModelObj.getAllUserDetails();
          logger.info(` getAllUserDetails userResp=${userResp}`);
          if(userResp.success){
            res.status(200).send({
                 success: true,
                 res: userResp.res,
               });
          }else{
            next(new customErrorHandler(userResp.error.statusCode, userResp.error.msg));
        }
     }

     async updateUserDetail(req,res,next){
         const userId=req.params.userId;
         logger.info(` updateUserDetail req.params=${req.params}`);
          const userResp=await this.userModelObj.updateUserDetailModel(req,userId);
          logger.info(` updateUserDetail userResp=${userResp}`);
          if(userResp.success){
            res.status(200).send({
                 success: true,
                 res: userResp.res,
                 msg:"Updated User Successfully"
               });
          }else{
            next(new customErrorHandler(userResp.error.statusCode, userResp.error.msg));
        }
     }
}