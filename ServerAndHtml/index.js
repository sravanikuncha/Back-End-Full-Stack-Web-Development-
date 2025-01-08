// Please don't change the pre-written code
// Import the necessary modules here

// Write your code here
const httpModuleObj=require("http");

// import filesystem
const fs=require("fs");

const htmlRenderingData=fs.readFileSync("index.html").toString();

function serverFUnction(request,response){
    response.end(htmlRenderingData);
}

const server=httpModuleObj.createServer(serverFUnction);


function listenMsgFunction(){
    console.log("server listening to port 8080")
}

server.listen(8080,listenMsgFunction);

module.exports = server;
