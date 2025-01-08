// Please don't change the pre-written code
// Import the necessary modules here
import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
  // Write your code here
  const token =req.cookies.jwtToken;
  const secretkey='B>)D}m#6D0RzPpb';
  try {
    const decoded = jwt.verify(token, secretkey);
    console.log(decoded);
    next();
  } catch (err) {
   return res.status(401).json({ success: false, msg: err });
  }
  
};

export default jwtAuth;
