// Please don't change the pre-written code.

const express = require("express");
const app = express();

const logRequest = (req, res, next) => {
    console.log(req.method);
    console.log(req.path)
  // Write your code here
  next();
};

// This route should only be accessible after passing through the 'logRequest' middleware. 

// or instead of array of request handlers 

// app.get('/',logRequest);
// Make necessary changes in the route below.
app.get("/",logRequest, (req, res) => {
  res.send("Coding Ninjas!");
});

module.exports = app;
