// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here

//get http module
const httpModuleObj=require("http");

const server=httpModuleObj.createServer((req,res)=>{
    console.log("omeone accessde the server")
    res.end("Response received at port 8080");
});

server.listen(8080,()=>{
    console.log("server listening at port 8080");
})

module.exports = server;
