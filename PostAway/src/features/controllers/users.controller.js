import jwt from 'jsonwebtoken';

import { UserModel } from "../models/users.model.js";
import { logger } from '../middleware/logger.middleware.js';


export class UserController{

    registerUser=(req,res)=>{
        const {name,email,password}=req.body;
        logger.info("registerUser name="+name+" email="+email);
        UserModel.addUser(name,email,password);
        res.status(201).send("User registered");
    }

    loginUser=(req,res)=>{
        const {email,password}=req.body;
        logger.info("loginUser email="+email);
        const isUserRegistered=UserModel.validateUser(email,password);
        if(!isUserRegistered){
            res.status(400).send("User not registered or invalid credenntils")
        }
        else{
            const payload = {
                useremail:email,
                userId:isUserRegistered.id
              };
              
              const secretKey = 'Y2hpLkvQR9JFpJEjs4WG6HW4KFPaxLHG';
              const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
              res.cookie('token',token);
              res.cookie('userId',isUserRegistered.id);
              res.status(200).send(token);
        }
    }
}