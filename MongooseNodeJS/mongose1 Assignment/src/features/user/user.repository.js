// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";
import { userSchema } from "./user.schema.js";
import bcrypt from "bcrypt";

const userModel=mongoose.model("User",userSchema);

export const userRegisterationRepo = async (userData) => {
  // Write your code here
  try{
    const userRegister=new userModel(userData);
    await userRegister.save();
    // console.log(userRegister);
    return {
      "success":true,
      "res":userRegister
    };
  }catch(err){
    // console.log(err.message);
    console.log(err);
    return {
      "error":{
        statusCode:400,
        msg:err.message
      }
    }
  }
};
export const userLoginRepo = async (userData) => {
  // Write your code here
  try{
    const userDataDB=await userModel.find({email:userData.email});
    const success= await bcrypt.compare(userData.password, userDataDB[0].password);
    if(success){
      return {
        "success":true,
        "res":userDataDB[0]
      }
    }
    else{
      throw err;
    }
  }catch(err){
    return {
      "error":{
        statusCode:400,
        msg:"Invalid Credentials"
      }
    }
  }
};

export const updateUserPasswordRepo = async (_id, newpassword, next) => {
  // Write your code here
  try{
    const updates={
      password: await bcrypt.hash(newpassword, 12)
    }
    const userData=await userModel.findByIdAndUpdate(_id,updates,{ new: true });
   
      return {
        "success":true,
        "res":userData
      }
  
  }catch(err){
    return {
      "error":{
        statusCode:400,
        msg:err.message
      }
    }
  }
};
