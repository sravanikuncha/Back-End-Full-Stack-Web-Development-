import express from "express";

//user imports
import { UserController } from "../controllers/users.controller.js";

const userControllerObj=new UserController();

const userRouter=express.Router();

userRouter.post("/signup",userControllerObj.registerUser);

userRouter.post("/signin",userControllerObj.loginUser);

export {userRouter};