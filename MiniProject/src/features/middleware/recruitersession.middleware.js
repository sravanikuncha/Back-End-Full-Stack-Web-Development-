import { RecruiterModel } from "../models/recruiter.model.js";

export const saveRecruiterSession=(req,res,next)=>{
    res.cookie('email',req.body.recruiteremail);
    next();
}

export const validateRecruiterSession=(req,res,next)=>{
    const email=req.body.recruiteremail || req.cookies.email;
    if(email){
        const recruiterPresent=RecruiterModel.getRecruiter(email);
        if(recruiterPresent){
            next();
        }
        else{
            res.render("error");
        }
    }
    else{
        res.render("error");
    }
}