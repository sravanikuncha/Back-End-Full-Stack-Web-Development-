import { JobModel } from "../models/jobs.model.js"

export const showJobs=(req,res)=>{
    const jobsDetails=JobModel.getAllJobs();
    res.render("jobListings",{jobsDetails});
}

export const updateJobList=(req,res)=>{
    const jobDetail=JobModel.updateJobDetailModel(req.body);
    res.render("viewDetails",{jobDetail});
}

export const addNewJob=(req,res)=>{
    const jobsDetails=JobModel.addJob(req.body);
    res.render("jobListings",{jobsDetails});
}

export const getJobDetail=(req,res)=>{
    const jobDetail=JobModel.getJobDetailModel(req.params.jobno);
    res.render("viewDetails",{jobDetail});
}

export const saveResume=(req,res)=>{
    JobModel.saveJobSeekerDetail(req.body,req.file);
    const jobDetail=JobModel.getJobDetailModel(req.body.jobid);
    res.render("viewDetails",{jobDetail});
}

export const updateJobDetail=(req,res)=>{
    const jobDetail=JobModel.updateJobDetail(req.params.jobno);
    const categories=JobModel.getCategories();
    const designation=JobModel.getDescription();
    const skills=JobModel.getAllSkills();
    res.render("updatejob",{jobDetail,categories,designation,skills});
}


export const deleteJobDetail=(req,res)=>{
    const jobsDetails=JobModel.deletJobDetailModel(req.params.jobno);
    res.render("jobListings",{jobsDetails});
}


export const showApplicants=(req,res)=>{
    const jobSeekers=JobModel.getAllJobsById(req.params.jobno);
   res.render("applicants",{jobSeekers});
}

export const searchJobCriteria=(req,res)=>{
    const company=req.body.jobFilter;
    const jobsDetails=JobModel.getJobsByCompany(company);
    res.render("jobListings",{jobsDetails});
}