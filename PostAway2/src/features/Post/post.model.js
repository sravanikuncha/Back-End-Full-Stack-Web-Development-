import { PostRepostory } from "./post.repository.js";


export class PostModel{

    constructor(){
        this.postRepostoryObj=new PostRepostory();
    }

    async getAllPostsModel(){
        const postResp=await this.postRepostoryObj.getAllPostsRepository();
        return postResp;
    }


    async getPostByIdModel(req){
        const postId=req.params.postId;
        const postResp=await this.postRepostoryObj.getPostByIdRepository(postId);
        return postResp;
    }

    
    async getUserPostsModel(req,res,next){
        const userId=req.params.userId;
        const postResp=await this.postRepostoryObj.getUserPostsRepository(userId);
        return postResp;
    }

    
    async createNewPostModel(userId,data){
       const imageUrl=data.file?.filename;
       const caption=data.body.caption;
       console.log(`caption is ${caption}`)
       const postData={caption,imageUrl,user:userId,likes:0,comments:0};
       const postResp=await this.postRepostoryObj.createNewPostRepository(postData);
       return postResp;
    }

    
    async deletePostByIdModel(req){
        const postId=req.params.postId;
        const postResp=await this.postRepostoryObj.deletePostByIdRepository(postId);
        return postResp;
    }

    
    async updatePostByIdModel(req){
        const postId=req.params.postId;
        const caption=req.body.caption;
        const imageUrl=req.file?.filename;

        const postUpdate={};
        if(caption){
            postUpdate.caption=caption;
        }

        if(imageUrl){
            postUpdate.imageUrl=imageUrl;
        }
        const postResp=await this.postRepostoryObj.updatePostByIdRepository(postId,postUpdate);
        return postResp;
    }
}