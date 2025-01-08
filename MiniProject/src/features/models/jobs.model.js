import path from "path";

const category=["Tech","NonTech"];

const designation=["HR","SDE","Devops","MERN Developer","MEAN Developer","JAVA Developer","Front-End Developer","Back-End Developer","Full-Stack Developer"];

const skills=["React","NodeJS","Angular","MongoDB","SQL","Express","Java","SpringBoot","C++","DataStructures & Algorithm"];

const  jobArray=[];

const jobSeekers=[];

export class JobModel{

    constructor(jobcategory,jobdesignation,joblocation,companyName,salary,openings,skills,date){
        this.id=jobArray.length==0?1:jobArray[jobArray.length-1].id+1;
        this.jobcategory=jobcategory;
        this.jobdesignation=jobdesignation;
        this.joblocation=joblocation;
        this.companyName=companyName;
        this.salary=salary;
        this.openings=openings;
        this.skills=Array.isArray(skills) ? skills: [skills];
        this.date=date;
        this.applicants=0;
        this.postedon=new Date().toLocaleString();
    }
    
    static addJob(jobData){
        const {jobcategory,jobdesignation,joblocation,companyName,salary,openings,skills,date}=jobData;
        const jobObj=new JobModel(jobcategory,jobdesignation,joblocation,companyName,salary,openings,skills,date);
        jobArray.push(jobObj);
        return jobArray;
    }

    static getAllJobs(){
        return jobArray;
    }

    static getJobDetailModel(id){
        const jobIndex=jobArray.findIndex((eachJob)=>eachJob.id==id);
        return jobArray[jobIndex];
    }

    static getCategories(){
        return category;
    }

    static getDescription(){
        return designation;
    }

    static getAllSkills(){
        return skills;
    }

    static saveJobSeekerDetail(data,fileData){
      const jobid=data.jobid;
      const jobpost=jobArray.find((eachJob)=>{
        return eachJob.id==Number(jobid)
      });
      jobpost.openings--;
      jobpost.applicants++;
      data.filePath=fileData.destination;
      data.filename=fileData.filename;
      data.id=jobSeekers.length+1;
      jobSeekers.push(data);
    }


    static updateJobDetail(id){
        return jobArray[id-1];
    }

    static updateJobDetailModel(data){
        const {updatejobid,jobcategory,jobdesignation,joblocation,companyName,salary,openings,skills,date}=data;
        const jobDetailIndex=jobArray.findIndex((eachJob)=>{
            return eachJob.id==updatejobid;
        });
        jobArray[jobDetailIndex].jobcategory=jobcategory;
        jobArray[jobDetailIndex].jobdesignation=jobdesignation;
        jobArray[jobDetailIndex].joblocation=joblocation;
        jobArray[jobDetailIndex].companyName=companyName;
        jobArray[jobDetailIndex].salary=salary;
        jobArray[jobDetailIndex].openings=openings;
        jobArray[jobDetailIndex].skills=[];
        jobArray[jobDetailIndex].skills=Array.isArray(skills) ? skills: [skills];
        jobArray[jobDetailIndex].date=date;

        return jobArray[jobDetailIndex];
    }

    static deletJobDetailModel(id){
        const jobDetailIndex=jobArray.findIndex((eachJob)=>{
            return eachJob.id==id;
        });

        jobArray.splice(jobDetailIndex,1);
        return jobArray;
    }

    static getAllJobsById(id){
        return jobSeekers.filter((eachJobSeeker)=>{
            if(eachJobSeeker.jobid==id){
                const filepathlocation=path.join("..","uploads",eachJobSeeker.filename);
                eachJobSeeker.filePathLocation=filepathlocation;
                return eachJobSeeker;
            }
        });
    }

    static getJobsByCompany(company){
        return jobArray.filter((eachJob)=>{
            console.log(eachJob.companyName.toLowerCase()+"  "+company.toLowerCase());
            if((eachJob.companyName.toLowerCase()).includes(company.toLowerCase())){
                return eachJob;
            }
        })
    }
}