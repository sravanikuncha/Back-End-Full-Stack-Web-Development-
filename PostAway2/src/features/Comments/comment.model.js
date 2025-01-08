import { CommentRepository } from "./comment.repository.js";

export class CommentModel{

    constructor(){
        this.commentRepositoryObj=new CommentRepository();
    }   
     
    async getCommentsForPostModel(req){
        const postId=req.params.postId;
        const commentResp=await this.commentRepositoryObj.getCommentsForPostRepository(postId);
       return commentResp;
    }
    
    async addCommentForPostModel(req){
       const userId=req.userId;
       const postId=req.params.postId;
       const comment=req.body.comment;

       const commentData={comment,post:postId,user:userId,likes:0};
       const commentResp=await this.commentRepositoryObj.addCommentForPostRepository(commentData);
       return commentResp;
    }
       
    async deleteCommentForPostModel(req){
        const commentId=req.params.commentId;
        const commentResp=await this.commentRepositoryObj.deleteCommentForPostRepository(commentId);
       return commentResp;
    }
    
    async updateCommentForPostModel(req){
        const commentId=req.params.commentId;
        const comment=req.body.comment;
        const commentResp=await this.commentRepositoryObj.updateCommentForPostRepository(commentId,comment);
       return commentResp;
    }
}