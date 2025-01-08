import nodemailer from "nodemailer";


export const sendEmail=(req,res,next)=>{

    
    let transport=nodemailer.createTransport({
        service:"gmail",
        auth:{
          user:req.cookies.email,
          pass:'slwvvlczduktvhdj',
        }
      });
  
      const mailOptions ={
        from:req.cookies.email,
        to:req.body.useremail,
        subject:"Job Application",
        text:"Applied For the job Successfully , sit back until we process your application"
      }

        // sendmail
        function responseFunction(error,info){
      if(error){
        console.log("Failed"+error)
      }
      else{
        console.log("Success: Email sent to "+email);
      }
    }
    
    transport.sendMail(mailOptions,responseFunction);
      
    next();
}