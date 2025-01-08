import express from 'express';
import { FriendShipController } from './friendship.controller.js';
import { auth } from '../../middlewares/auth.middleware.js';

const friendShipControllerObj=new FriendShipController();

const friendshipRouter=express.Router();


//friends which are accepted .
friendshipRouter.get('/get-friends/:userId',(req,res,next)=>{
    friendShipControllerObj.getUserFriends(req,res,next)
});


friendshipRouter.use(auth);

// friend requests came but not yet accepted 
friendshipRouter.get('/get-pending-requests',(req,res,next)=>{
    friendShipControllerObj.getPendingRequests(req,res,next)
});

//loggedin user wants  to befriend or friend --this  is  frient request sent by friend Id 
friendshipRouter.post('/toggle-friendship/:friendId',(req,res,next)=>{
    friendShipControllerObj.toggleFriendship(req,res,next)
});


//logged in  user accepted or rejected the friennd Id 
friendshipRouter.post('/response-to-request/:friendId',(req,res,next)=>{
    friendShipControllerObj.acceptRejectRequest(req,res,next)
});

export {friendshipRouter};