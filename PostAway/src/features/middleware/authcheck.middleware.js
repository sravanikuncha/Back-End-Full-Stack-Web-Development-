import jwt from 'jsonwebtoken';

export const auth=(req,res,next)=>{
    const token =req.cookies.token;
    if(!token){
        res.status(401).send("Unauthorised");
    }
    else{
        try{
            const payload = jwt.verify(
                token,
                "Y2hpLkvQR9JFpJEjs4WG6HW4KFPaxLHG"
            );
        }catch(err){
            console.log(err);
           return res.status(401).send("Unauthorised");
        }
    }
    next();
}