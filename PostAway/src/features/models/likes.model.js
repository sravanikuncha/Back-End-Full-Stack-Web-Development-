
//for a particular posts and user number of values in likes array tells likes of teh post 
//postId will be from postsmodel
//userId will be from userModel

const likes=[];

export class LikeModel{

    // variables
    id;
    userId;
    postId;
    count;


    constructor(userId,postId,count){
        this.id=likes.length==0?1:likes[likes.length-1].id+1;
        this.userId=userId;
        this.postId=postId;
        this.count=count;
    }

    static getLikeForPostModel(postId,userId){
        const likeObjIndex=likes.findIndex((eachLike)=>eachLike.postId==postId && eachLike.userId==userId);
        if(likeObjIndex==-1){
            return 0;
        }
        return likes[likeObjIndex].count;
    }

    static addLikeForPostModel(userId,postId,count){
        const likeObj=new LikeModel(userId,postId,count);
        likes.push(likeObj);
    }

    static toggleLikeForPostModel(userId,postId){
        const likeInOfPost=likes.findIndex((eachLike)=>{
            return eachLike.postId==postId && eachLike.userId==userId ;
        });
        if(likeInOfPost==-1 || likes[likeInOfPost].count==0){
            this.addLikeForPostModel(userId,postId,1);
            return true;
        }
        likes.splice(likeInOfPost,1);
        return false;
    }

}