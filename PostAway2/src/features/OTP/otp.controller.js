import { OTPModel } from "./otp.model.js";
import { customErrorHandler } from "../../middlewares/errorHandler.middleware.js";
import { logger } from "../../middlewares/logger.middleware.js";


export class OTPController{

    constructor(){
        this.otpModelObj=new OTPModel();
    }

    async sendOTP(req,res,next){
        const sendResp=await this.otpModelObj.sendOTPModel(req);
        logger.info(`sendOTP sendResp=${sendResp}`);
        if(sendResp.success){
            res.status(200).json({
                 success: true,
                 msg:"OTP Sent Successfully"
               });
          }else{
            next(new customErrorHandler(sendResp.error.statusCode, sendResp.error.msg));
        }
    }

    async verifyOTP(req,res,next){
        const sendResp=await this.otpModelObj.verifyOTPModel(req);
        logger.info(`verifyOTP sendResp=${sendResp}`);
        if(sendResp.success){
            res.status(200).json({
                 success: true,
                 msg:"OTP Verified Successfully"
               });
          }else{
            next(new customErrorHandler(sendResp.error.statusCode, sendResp.error.msg));
        }
    }


    async resetPassword(req,res,next){
        const sendResp=await this.otpModelObj.resetPasswordModel(req);
        logger.info(`resetPassword sendResp=${sendResp}`);
        if(sendResp.success){
            res.status(200).json({
                 success: true,
                 res: sendResp.res
               });
          }else{
            next(new customErrorHandler(sendResp.error.statusCode, sendResp.error.msg));
        }
    }
}