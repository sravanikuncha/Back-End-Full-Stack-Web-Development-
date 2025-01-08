import express from "express";
import ejs from "ejs";
import expressLayouts  from "express-ejs-layouts"
import cookieParser from "cookie-parser";
import swagger from 'swagger-ui-express';

//user import
import { userRouter } from "./src/features/routes/users.routes.js";
import { postRouter } from "./src/features/routes/posts.routes.js";
import { commentRouter } from "./src/features/routes/comments.routes.js";
import { likeRouter } from "./src/features/routes/likes.routes.js";
import apiDocs from './swagger.json' assert {type: 'json'};


const server=express();

server.use('/api-docs', swagger.serve, swagger.setup(apiDocs));

server.use(express.static('public'));

// server.use(express.urlencoded({extended:true}));
server.use(cookieParser());
server.use(express.json());

//user routes
server.use('/api',userRouter);

//posts routes
server.use('/api/posts',postRouter);

//comments routes
server.use('/api/comments',commentRouter);

//likes route
server.use('/api/likes',likeRouter);


server.listen("3000",()=>{
    console.log("Postaway application is running on port 3000");
})