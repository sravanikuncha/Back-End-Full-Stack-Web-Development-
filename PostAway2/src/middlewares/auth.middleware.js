import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const key=process.env.JWT_SECRET;

export const auth=(req,res,next)=>{
    const token =req.cookies.token;
    console.log(token)
    if(!token){
        return res.status(401).send("Unauthorised");
    }
    else{
        try{
            const payload = jwt.verify(
                token,
                key
            );
            req.userId=payload.userId;
            req.email=payload.useremail;
            console.log(payload)
        }catch(err){
            console.log(err);
           return res.status(401).send("Unauthorised");
        }
    }
    next();
}

export const generateToken=(req,res,userData)=>{
    try{
    const payload = {
        useremail:userData.email,
        userId:userData._id
      };
      
      const secretKey = key;
      const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
      res.cookie('token',token);
      res.cookie('userId',userData._id);
      return { success: true, res: token };
    }catch(error){
        console.log(err);
        return { success: false, error: { statusCode: 400, msg: error } };
    }
}