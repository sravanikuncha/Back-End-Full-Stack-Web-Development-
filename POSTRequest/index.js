// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  //  Write your code here
  if(req.method=='POST'){
    let data="";

    req.on('data',(smallChunk)=>{
      data+=smallChunk;
    });

    req.on('end',()=>{
      fs.appendFileSync('data.txt',data);
      const dataBuffer=fs.readFileSync('data.txt',{
        encoding:"utf-8"
      });
      
      console.log(dataBuffer);
    })
  }
  res.end("data received");
});

export default server;


//readdata and append to file , req.end  appenFileSync . 
//read and print file data
