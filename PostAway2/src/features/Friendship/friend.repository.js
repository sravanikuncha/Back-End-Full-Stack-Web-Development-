import { friendSchema } from "./friend.schema.js"; 
import mongoose from "mongoose";

const friendDBModel =mongoose.model('Friend',friendSchema);


export class FriendShipRepository{

    async getUserFriendsRepository(userId){
        try{
            const friendResp=await friendDBModel.find({user:userId}).populate({
                path: 'friend',
                select: { password: 0, token: 0, avatar: 0 }
              });
            return {success: true,res:friendResp};
        }catch(error){
            return { success: false, error: { statusCode: 400, msg: error } };
        }
    }

    async getPendingRequestsRepository(userId){
        try{
            const friendResp=await friendDBModel.find({user:userId,status:'Pending'}).populate({
                path: 'friend',
                select: { password: 0, token: 0, avatar: 0 }
              });
            return {success: true,res:friendResp};
        }catch(error){
            return { success: false, error: { statusCode: 400, msg: error } };
        }
    }

    async toggleFriendshipRepository(friendId,userId){
        try{
           let friendResp=await friendDBModel.findOne({user:userId,friend:friendId});
           if(!friendResp){
            const updates={
                user:userId,
                friend:friendId,
                status:'Pending'
            }
            console.log(updates)
            friendResp=new friendDBModel(updates);
            await friendResp.save();
            return {success: true,res:friendResp,msg:"Request Pending"};
           }else{
            friendResp=await friendDBModel.deleteOne({user:userId,friend:friendId});
            return {success: true,res:friendResp,msg:"Befriended Successfully"};
           }
        }catch(error){
            return { success: false, error: { statusCode: 400, msg: error } };
        }
    }

    async acceptRejectRequestRepository(friendId,userId,status){
        try{
            const friendResp=await friendDBModel.updateOne({user:userId,friend:friendId},{
                status:status
            },
            {new:true});
            
            if(status=='Accepted'){
                return {success: true,res:friendResp,msg:"Friend Request Accepted"};
            }
            else{
                return {success: true,res:friendResp,msg:"Friend Request Rejected"};
            }
         }catch(error){
             return { success: false, error: { statusCode: 400, msg: error } };
         }
    }

}