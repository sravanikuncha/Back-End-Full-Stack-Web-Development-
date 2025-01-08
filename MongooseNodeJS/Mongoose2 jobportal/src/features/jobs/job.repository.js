// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";
import { jobSchema } from "./schema/newJob.schema.js";
import { applyJobSchema } from "./schema/applyJob.schema.js";

const jobModel=mongoose.model('Job',jobSchema);
const applyJobModel=mongoose.model('JobApplicant',applyJobSchema);

export const createNewJob = async (job) => {
  // Write your code here
 console.log(job);
  const jobDB=new jobModel(job);
  await jobDB.save();
  return jobDB;
};

export const applyJobRepo = async (jobId, userId) => {
  // Write your code here

  //first check if already applicant is there or not 
  const isPresent=await applyJobModel.findOne({jobId,userId});
  console.log(isPresent);
  if(isPresent){
    return;
  }
  //create a entry in jobapplicant 
  const jobApplicantDB=new applyJobModel({jobId,userId});
  await jobApplicantDB.save();

  //get id of applicant and upd1ate jobmodel 
  const jobApplicantId=jobApplicantDB._id;
  const updates={
    $push:{
      applicants:jobApplicantId
    }
  }
  const jobUpdateDB=await jobModel.findByIdAndUpdate({_id:jobId},updates,{new:true});
  return jobUpdateDB;
};
export const findJobRepo = async (_id) => {
  // Write your code here
  //getting job details if job is prese
  const job_description=await jobModel.findById(_id);
  return job_description;
};
