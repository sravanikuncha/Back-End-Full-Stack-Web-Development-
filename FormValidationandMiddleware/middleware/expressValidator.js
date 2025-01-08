// Please don't change the pre-written code
// Import the necessary modules here

// import expressValidator from 'express-validator';

// const body=expressValidator.body;

// const validationResult=expressValidator.validationResult;

import {body,validationResult} from 'express-validator'

export const formValidation = async (req, res, next) => {
  // Write your code here


  const rules=[
     body('name').trim().notEmpty().withMessage("Name is required"),
     body('email').trim().isEmail().withMessage("Enter a valid email"),
     body('image').trim().custom((value, { req }) => {
      if (!req.file) {
        throw new Error('Profile image is required');
      }
      return true;
    })
  ]


  await Promise.all(rules.map((rule) => rule.run(req)));

  var validationErrors = validationResult(req);
  if(!validationErrors.isEmpty()){
      console.log(validationErrors);
      return res.send(validationErrors.array())//next will not execute because we are writing middleware here 
      // res.send("jksnsns");
  }
  // console.log("jsbjbcjdbkj")//this will print when above if condition not working 
  next();

};
