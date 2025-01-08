const express=require('express');
const server=express();



function methodMessage(req,res){
  const typeMethod=req.method;

  switch(typeMethod){
    case 'GET':
      res.send("get");
      break;
    case 'POST':
      res.send("post");
      break;
    case 'PUT':
      res.send("put");
      break;
    case 'DELETE':
      res.send("delete");
      break;
  }
}

server.get('/',methodMessage);

server.post('/',methodMessage);

server.put('/',methodMessage);

server.delete('/',methodMessage);

module.exports =  server ;
