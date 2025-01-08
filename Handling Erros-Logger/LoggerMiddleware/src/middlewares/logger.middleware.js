// Please don't change the pre-written code
// Import the necessary modules here
import fs from "fs";

// Write your code here
const fsPromises=fs.promises;
export const loggerMiddleware = async (req, res, next) => {
  // Write your code 
  const logData=`${new Date().toUTCString()}\nreq URL:${req.url}\nreqBody:${JSON.stringify(req.body)}`;
  fsPromises.writeFile("log.txt",logData)
  next();
};
export default loggerMiddleware;
