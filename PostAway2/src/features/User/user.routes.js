import express from 'express';
import { UserController } from './user.controller.js';
import { upload } from '../../middlewares/fileUpload.middleware.js';
import { auth } from '../../middlewares/auth.middleware.js';

const userControllerObj=new UserController();

const userRouter=express.Router();


//userroutes
userRouter.post('/signup', upload.single('avatar'),(req,res,next)=>{
    userControllerObj.registerUser(req,res,next)
});

userRouter.post('/signin',(req,res,next)=>{
    userControllerObj.signInUser(req,res,next)
});

userRouter.post('/logout',auth,(req,res,next)=>{
    userControllerObj.logoutUser(req,res,next)
});

userRouter.post('/logout-all-devices',auth,(req,res,next)=>{
    userControllerObj.logoutAllDevices(req,res,next)
});

//userprofileRoutes 
userRouter.get('/get-details/:userId',auth,(req,res,next)=>{
    userControllerObj.getUserDetails(req,res,next)
});

userRouter.get('/get-all-details',(req,res)=>{
    userControllerObj.getAllUserDetails(req,res)
});

userRouter.put('/update-details/:userId',auth,upload.single('avatar'),(req,res)=>{
    userControllerObj.updateUserDetail(req,res)
});


export {userRouter};