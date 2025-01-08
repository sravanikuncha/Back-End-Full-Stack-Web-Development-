import { UserRepository } from "./user.repository.js";
import { hashPassword } from "../../utils/hashPassword.js";
import { compareHashedPassword } from "../../utils/hashPassword.js";
import { generateToken } from "../../middlewares/auth.middleware.js";

export  class UserModel{

    constructor(){
        this.userRepostoryObj=new UserRepository();
    }

    async registerUserModel(userData){
        const password=userData.password;
        const hashedPassword=await hashPassword(password);
        userData.password=hashedPassword;
        return await this.userRepostoryObj.registerUserRepository(userData);
    }

    async signInUserModel(req,res,signInData){
        const {email,password}=signInData;
        const userData=await this.userRepostoryObj.getUserByEmail(email);

        if(!userData){
            return { success: false, error: { statusCode: 400, msg: "User Not Registered" } };
        }
        const hashedPassword=userData.password;
        const isSame=await compareHashedPassword(password,hashedPassword);

        if(!isSame){
            return { success: false, error: { statusCode: 400, msg: "Invalid Credentials" } };
        }
        

        const resp=generateToken(req,res,userData);
        if(resp.success){
            const token=resp.res;
            const userid=userData._id;
            //store token in user DB
            await this.userRepostoryObj.storeToken(token,userid);
        }
        return resp;
    }

    async logoutUserModel(res,req){
        //remove from cookie 
        console.log(req.cookies)
        if(req.cookies){
        res.clearCookie("userId");
        res.clearCookie("token");
        }
        else{
            return { success: false, error: { statusCode: 400, msg: "Logged ut Already" } };
        }
        return { success: true, msg: "Logout  successful" };
    }

    async logoutAllDevicesModel(res,req,userId){
        //empty token array from DB 
        await this.userRepostoryObj.logoutAllDevicesRepository(userId);
        console.log(req.cookies)
        if(req.cookies){
            res.clearCookie("userId");
            res.clearCookie("token");
            return { success: true, msg: "Logout From All devices successful" };
            }
            return { success: false, error: { statusCode: 400, msg: "Log in to Logout from all devices" } };
    }
    

    async getUserDetailsModel(userId){
       const resp=await this.userRepostoryObj.getUserDetailsRepository(userId);
       return resp;
    }

    async getAllUserDetails(){
        const resp=await this.userRepostoryObj.getAllUserDetailsRepository();
       return resp;
    }

    async updateUserDetailModel(data,userId){
        const {name,gender,email}=data.body;
        const imageUrl=data.file?.filename;
       const res=await this.userRepostoryObj.updateUserDetailRepository(name,gender,email,imageUrl,userId);
       return res;
    }
}