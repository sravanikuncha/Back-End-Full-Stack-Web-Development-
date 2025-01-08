
const recruiterArray=[];

export class RecruiterModel{

    constructor(recruiterid,recruitername,recruiteremail,recruiterpassword){
        this.recruiterid=recruiterid;
        this.recruitername=recruitername;
        this.recruiteremail=recruiteremail;
        this.recruiterpassword=recruiterpassword;
    }

    static registerRecruiter(data){
        const {recruitername,recruiteremail,recruiterpassword}=data;
        const id=recruiterArray.length==0?1:recruiterArray[recruiterArray.length-1].id+1;
        recruiterArray.push(new RecruiterModel(id,recruitername,recruiteremail,recruiterpassword));
    }


    static getRecruiter(email){
        return recruiterArray.find((eachrecruiter)=>
        eachrecruiter.recruiteremail==email);
    }
}