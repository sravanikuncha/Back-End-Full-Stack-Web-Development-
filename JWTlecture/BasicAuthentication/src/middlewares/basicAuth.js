// Please don't change the pre-written code
// Import the necessary modules here
import { getAllUsers,confirmLogin } from "../features/user/model/user.model.js";

const basicAuthMiddleware = (req,res,next) => {
  // Write your code here

  const token=req.headers["authorization"];
  
  if(token){
    const base64Token=token.replace('Basic ','');
    const userAuthenticationCreds=Buffer.from(base64Token,'base64').toString('utf8');
    const data={
      "email":userAuthenticationCreds.split(":")[0],
      "password":userAuthenticationCreds.split(":")[1],
    }
    console.log(data);
    const isValidUser=confirmLogin(data);
    if(!isValidUser){
      return res.status(401).json({'success':'false','message':'authorization failed'});
    }
  }
  else{
    return res.status(401).json({'success':'false','message':'no authorization details found'});
  }
  next();
};

export default basicAuthMiddleware;
