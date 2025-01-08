// Please don't change the pre-written code

import { logger } from "./logger.middleware.js";

// Import the necessary modules here
export class customErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  // Write your code here

  let logData=`TimeStamp:${new Date().toUTCString()} req URL:${req.url}`;
  if(err instanceof customErrorHandler){
    const statusCode=err.statusCode;
    const errMessage=err.message;
    logData+=` error msg:${errMessage}`;
    logger.log({
      level:"error",
      message:logData
    })
    res.status(statusCode).send(errMessage);
  }
  else{
    const appMsg="Oops! Something went wrong... Please try again later!";
    logData+=` error msg:${appMsg}`;
    logger.log({
      level:"error",
      message:logData
    })
    res.status(500).send(appMsg);
  }
  next();
};
