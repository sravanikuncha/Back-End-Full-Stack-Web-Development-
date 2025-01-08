import { FriendShipRepository } from "./friend.repository.js";

export class FriendShipModel{

    constructor(){
        this.friendshipRepositoryObj=new FriendShipRepository();
    }

    async getUserFriendsModel(req){
        const userId=req.params.userId;
        const friendResp=await this.friendshipRepositoryObj.getUserFriendsRepository(userId);
        return friendResp
    }

    async getPendingRequestsModel(req){
        const userId=req.userId;
        const friendResp=await this.friendshipRepositoryObj.getPendingRequestsRepository(userId);
        return friendResp;
    }

    async toggleFriendshipModel(req){
        const friendId=req.params.friendId;
        const userId=req.userId;
        const friendResp=await this.friendshipRepositoryObj.toggleFriendshipRepository(friendId,userId);
        return friendResp;
    }

    async acceptRejectRequestModel(req){
        const friendId=req.params.friendId;
        const userId=req.userId;
        const status=req.body.status;
        const friendResp=await this.friendshipRepositoryObj.acceptRejectRequestRepository(friendId,userId,status);
        return friendResp;
    }

}