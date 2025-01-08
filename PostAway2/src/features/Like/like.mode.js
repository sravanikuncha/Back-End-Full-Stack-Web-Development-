import { LikeRepository } from "./like.repository.js";

export class LikeModel{

    constructor(){
        this.likeRepositoryObj=new LikeRepository();
    }

    async getLikePostOrCommentModel(req){
        const like=req.query.Like;
        const id=req.params.id;
        const likeResp=await this.likeRepositoryObj.getLikePostOrCommentRepository(like,id);
        return likeResp;
    }

    async toggleLikePostOrCommentModel(req,res,next){
        const like=req.query.Like;
        const id=req.params.id;
        const likeResp=await this.likeRepositoryObj.toggleLikePostOrCommentRepository(like,id);
        return likeResp;
    }
}