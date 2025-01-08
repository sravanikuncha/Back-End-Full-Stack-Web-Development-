import { OTPRepository } from "./otp.repository.js";
import { hashPassword } from "../../utils/hashPassword.js";
export class OTPModel{

    constructor(){
        this.otpRepositoryObj=new OTPRepository();
    }
    

    async sendOTPModel(req){
        const userId=req.userId;
        const email=req.email;
        const otpResp=this.otpRepositoryObj.sendOTPRepository(userId,email);
        return otpResp;
    }

    async verifyOTPModel(req){
        const otp=req.body.otp;
        const userId=req.userId;
        const otpResp=this.otpRepositoryObj.verifyOTPRepository(userId,otp);
        return otpResp;
    }


    async resetPasswordModel(req){
        const userId=req.userId;
        const newPassword=req.body.newPassword;
        const hashedPassword=await hashPassword(newPassword);
        const otpResp=this.otpRepositoryObj.resetPasswordRepository(userId,hashedPassword);
        return otpResp;
    }
}