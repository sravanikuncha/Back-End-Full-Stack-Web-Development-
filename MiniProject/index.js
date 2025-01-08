import express from "express";
import ejs from "ejs";
import path from "path";
import expressLayouts  from "express-ejs-layouts"
import session from "express-session";
import cookieParser from "cookie-parser";

import { saveRecruiter,loginRecruiter,newJob,loginPage,saveCookieDetails,logoutPortal } from "./src/features/controllers/recruiter.controller.js";
import { showJobs,addNewJob,getJobDetail,saveResume,updateJobDetail,updateJobList,deleteJobDetail,showApplicants,searchJobCriteria}
 from "./src/features/controllers/jobs.controller.js";
import { upload } from "./src/features/middleware/resumeUpload.middleware.js";
import { saveRecruiterSession,validateRecruiterSession } from "./src/features/middleware/recruitersession.middleware.js";
import { sendEmail } from "./src/features/middleware/userEmail.middleware.js";


const server=express();

//session mddleware
server.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));
  
server.use(cookieParser());

//urlencoded
server.use(express.urlencoded({extended:true}))
//set views
const viewpath=path.join(path.resolve(),'src','features','views');
server.set("view engine","ejs");
server.set('views',viewpath)


//use ejs layouts
server.use(expressLayouts);

//statically expose public folder
const publicPath=path.join(path.resolve(),'src','public');
server.use(express.static(publicPath));

//save login cookie details 
server.use(saveCookieDetails);

server.get("/",(req,res)=>{
    res.render("landingpage");
});


//recruiter 
server.post("/saveRecruiter",saveRecruiter);

server.get("/loginPage",loginPage);

server.post("/loginRecruiter",validateRecruiterSession,saveRecruiterSession,loginRecruiter);
  
server.get("/showJobsPage",showJobs);


server.get("/newJob",validateRecruiterSession,newJob)

server.get("/logout",logoutPortal)

//job
server.post("/postnewjob",addNewJob)

server.get("/viewJobDetail/:jobno",getJobDetail);

server.post('/applyJob',upload.single('userresume'),sendEmail,saveResume);

server.get('/update/:jobno',updateJobDetail);

server.post('/updatejob',updateJobList)

server.get('/delete/:jobno',deleteJobDetail);

server.get('/applicants/:jobno',showApplicants);

server.post("/searchJobsFromList",searchJobCriteria);

server.listen("3000",()=>{
    console.log("server started listening to 3000");
})