import mongoose from "mongoose";
import { userSchema } from "./user.schema.js";

const userDBModel=mongoose.model('User',userSchema);

export  class UserRepository{

    async registerUserRepository(userData){
        try{
            const response=new userDBModel(userData);
            await response.save();
            const {name,email,gender,friends,_id}=response;
            const result={_id,name,email,gender,friends};
            return { success: true, res: result };
        }catch(error){
            return { success: false, error: { statusCode: 400, msg: error } };
        }
    }

    async storeToken(token,id){
        const update={
            $push:{
                token:token
            }
        }
        const updateUser=await userDBModel.findByIdAndUpdate(id,update,{new:true});
        return updateUser;
    }


    async getUserByEmail(email){
        const userData=await userDBModel.findOne({email});
        return userData;
    }

    async logoutUserRepository(req,res){

    }

    async logoutAllDevicesRepository(id){
        try{
            const userDB=await userDBModel.findById(id);
            if(userDB){
                userDB.token=[];
                userDB.save();
                return { success: true, res: userDB };
            }
        }catch(error){
            return { success: false, error: { statusCode: 400, msg: error } };
        }
    }
    

    async getUserDetailsRepository(userId){
       //getuserdetails  but hide password and token . 
       try{
            // const userDB=await userDBModel.findById(userId);
            const userDB = await userDBModel.findById(userId).select({
               password:0,
               token:0,
               avatar:0
              });
              if(!userDB){
                return { success: false, error: { statusCode: 400, msg: "User Not Found" }} ;
              }
              
            return { success: true, res: userDB };
       }catch(error){
            return { success: false, error: { statusCode: 400, msg: error } };
        }
    }

    async getAllUserDetailsRepository(){
        try{
            const userDB = await userDBModel.find().select({
                password:0,
                token:0,
               avatar:0
               });
            if(!userDB){
                return { success: false, error: { statusCode: 400, msg: "No  Users present" }} ;
              }
            return { success: true, res: userDB };
       }catch(error){
            return { success: false, error: { statusCode: 400, msg: error } };
        }
    }

    async updateUserDetailRepository(name,gender,email,imageUrl,userId){
        try{
            const updates={};
            if(name){
                updates.name=name;
            }
            if(gender){
                updates.gender=gender;
            }
            if(email){
                updates.email=email;
            }
            if(imageUrl){
                updates.avatar=imageUrl;
            }
            const userDB=await userDBModel.findByIdAndUpdate(userId,updates,{new:true}).select({
                password:0,
                token:0,
               avatar:0
               });;
            return { success: true, res: userDB };
       }catch(error){
            return { success: false, error: { statusCode: 400, msg: error } };
        }
    }
}