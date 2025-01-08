// Please don't change the pre-written code
// Import the necessary modules here
export const auth = (req, res, next) => {
  // Write your code here
  const loggedInUser=req.session.userEmail;

  if(loggedInUser){
    next();
  }
  else{
    res.render("msgPage",{ message: "login first to access secure page" });
  }
};
