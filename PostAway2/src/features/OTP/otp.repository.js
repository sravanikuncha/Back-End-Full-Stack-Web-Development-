import mongoose from "mongoose";
import { sendmail } from "../../middlewares/mail.middleware.js";
import { otpSchema } from "./otp.schema.js";
import { userSchema } from "../User/user.schema.js";

const otpDBModel=mongoose.model('OTP',otpSchema);
const userDBModel=mongoose.model('User',userSchema);

export class OTPRepository{

    generateCode(){
        const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
        return randomCode;
    }

    async sendOTPRepository(userId,email){
        try{
        const otp=this.generateCode();
        const mailresp=await sendmail(email,otp);
        if(mailresp.success){
            const otpData=await otpDBModel.updateOne({user:userId},{
                user:userId,
                otp:otp,
                verification:"Not Verified"
            },{
                upsert: true
            })
            return { success: true, res: otpData };
        }else{
            return { success: false, error: { statusCode: 400, msg: "Email Sent Unsuccessful" } };
        }}catch(err){
            return { success: false, error: { statusCode: 400, msg: err } };
        }
    }

    async verifyOTPRepository(userId,otp){
        try{
          const otpResp=await otpDBModel.findOne({user:userId});
          const otpSent=otpResp?.otp;
          console.log(otpSent+" "+otp)
          if(otpSent==otp){
            await otpDBModel.findOneAndUpdate({user:userId},{
                verification:"Verified"
            });
            return { success: true, res: otpResp };
          }else{
            return { success: false, error: { statusCode: 400, msg: "Invaild OTP" } }; 
          }
        }catch(err){
            return { success: false, error: { statusCode: 400, msg: err } };
        }
    }


    async resetPasswordRepository(userId,newPassword){
        try{
            const otpResp=await otpDBModel.findOne({user:userId});
            if(otpResp && otpResp.verification=='Verified'){
                await userDBModel.findByIdAndUpdate(userId,{password:newPassword})
                //once reset delete from otp DB 
                await otpDBModel.deleteOne({user:userId});
                return { success: true, res: "Password Updated Successfully" };
            }else{
                return { success: false, error: { statusCode: 400, msg: "Click Send OTP" } };
            }
        }catch(err){
            return { success: false, error: { statusCode: 400, msg: err } };
        }
    }
}