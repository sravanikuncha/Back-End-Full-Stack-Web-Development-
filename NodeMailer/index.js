// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

  //read email
  const readLine=readline.createInterface({
    input:process.stdin,
    output:process.stdout
  });

    let transport=nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:'codingninjas2k16@gmail.com',
        pass:'slwvvlczduktvhdj',
      }
    });

    const mailOptions ={
      from:'codingninjas2k16@gmail.com',
      to:email,
      subject:"Coding Ninjas",
      text:"The world has enough coders; be a coding ninja!"
    }

const Solution = () => {
  // Write your code here

  readLine.question("please enter your email ",(email)=>{

    readLine.close();
//     //send email  execute this call back when user provides input

//       //send email 
//     // function responseFunction(error,info){
//     //   if(error){
//     //     console.log("Failed"+error)
//     //   }
//     //   else{
//     //     console.log("Success: Email sent to "+email);
//     //   }
//     // }
    
//     // transport.sendMail(mailOptions,responseFunction);

//     //2nd way 
    async function sendmail(email,transport,mailOptions){
        try{
          const output=await transport.sendMail(mailOptions);
          console.log("Success: Email sent to "+email);
          transport.close();
        }
        catch(err){
          console.log("failed");
          transport.close();
        }
    }
    sendmail(email,transport,mailOptions);
    
  });
 

};

export default Solution;


// //readmail id , 
// // send mail  with optos to and subject and message 

// import nodemailer from "nodemailer";
// import readline from "readline";

// const Solution = () => {
//   const cout = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   // Create a transporter object with SMTP details
//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "codingninjas2k16@gmail.com",
//       pass: "slwvvlczduktvhdj",
//     },
//   });

// // prompt the user to enter their email address
//   cout.question("please enter your mail ", (userMail) => {
//     // Define mail options
//     let mailOptions = {
//       from: "codingninjas2k16@gmail.com",
//       to: userMail,
//       text: "The world has enough coders; be a coding ninja!",
//       subject: "Coding Ninjas",
//     };

//     // Send mail with defined transport object
//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(`Success: Email sent to ${userMail}`);
//       }
//     });
//     cout.close();
//   });
// };

// export default Solution;