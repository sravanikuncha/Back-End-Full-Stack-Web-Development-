import express from 'express';
import { postRouter } from './src/features/Post/post.routes.js';
import { userRouter } from './src/features/User/user.routes.js';
import { commentRouter } from './src/features/Comments/comment.routes.js';
import { likeRouter } from './src/features/Like/like.routes.js';
import cookieParser from "cookie-parser";
import { appLevelErrorHandlerMiddleware } from './src/middlewares/errorHandler.middleware.js';
import { otpRouter } from './src/features/OTP/otp.routes.js';
import { friendshipRouter } from './src/features/Friendship/friendship.routes.js';
import swagger from 'swagger-ui-express';
import apiDocs from './swagger.json' assert {type: 'json'};
import cors from 'cors';

const server=express();

server.use(cors());

server.use('/api-docs', swagger.serve, swagger.setup(apiDocs));

server.use(express.json());

server.use(cookieParser());

server.use(express.static('public'));

//routes implemenattion

server.use('/api/users',userRouter);

server.use('/api/posts',postRouter);

server.use('/api/comments',commentRouter);

server.use('/api/likes',likeRouter);

server.use('/api/otp',otpRouter);

server.use('/api/friends',friendshipRouter);

server.use(appLevelErrorHandlerMiddleware);

export {server};
