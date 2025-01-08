import { JobModel } from "../models/jobs.model.js";
import { RecruiterModel } from "../models/recruiter.model.js";

export const saveRecruiter=(req,res)=>{
    RecruiterModel.registerRecruiter(req.body);
    res.render("recruiterLogin");
}

export const loginPage=(req,res)=>{
    res.render("recruiterLogin");
}

export const loginRecruiter=(req,res)=>{

    const recruiterDetails=RecruiterModel.getRecruiter(req.body.recruiteremail);
    
    const recruiterData={
        "loggedin":"true",
        "name":recruiterDetails.recruitername
    }
    res.locals.recruiterData=recruiterData;

    //set cookies 
    res.cookie('name',recruiterDetails.recruitername);

    res.render("landingpage");
}

export const newJob=(req,res)=>{
   const categories=JobModel.getCategories();
   const designation=JobModel.getDescription();
   const skills=JobModel.getAllSkills();
   res.render("newjob",{categories,designation,skills});
}

export const saveCookieDetails=(req,res,next)=>{
    const name=req.cookies.name;
    if(name){
        const recruiterData={
            "loggedin":"true",
            "name":name
        }
        res.locals.recruiterData=recruiterData;
    }
    next();
}

export const logoutPortal=(req,res,next)=>{
    Object.keys(req.cookies).forEach(cookieName => {
        res.clearCookie(cookieName);
      });
      res.redirect('/');
}