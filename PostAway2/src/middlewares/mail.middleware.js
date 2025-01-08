import nodemailer from 'nodemailer';

let transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:'codingninjas2k16@gmail.com',
      pass:'slwvvlczduktvhdj',
    }
  });

  const mailOptions ={
    from:'codingninjas2k16@gmail.com',
    subject:"Reset password"
  }


  export  async function sendmail(email,otp){
    try{
        mailOptions.to=email;
        mailOptions.text=`OTP: ${otp}`;
        console.log(mailOptions);
        const output=await transport.sendMail(mailOptions);
        console.log("Success: Email sent to "+email);
        transport.close();
        return { success: true};
    }
    catch(err){
      console.log("failed");
      console.log(err);
      transport.close();
      return { success: false};
    }
}