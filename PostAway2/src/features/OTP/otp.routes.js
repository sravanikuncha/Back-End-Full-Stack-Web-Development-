import express from 'express';
import { OTPController } from './otp.controller.js';
import { auth } from '../../middlewares/auth.middleware.js';

const otpControllerObj=new OTPController();

const otpRouter=express.Router();

otpRouter.use(auth);

otpRouter.post('/send',(req,res,next)=>{
    otpControllerObj.sendOTP(req,res,next)
});

otpRouter.post('/verify',(req,res,next)=>{
    otpControllerObj.verifyOTP(req,res,next)
});

otpRouter.post('/reset-password',(req,res,next)=>{
    otpControllerObj.resetPassword(req,res,next)
});

export {otpRouter};