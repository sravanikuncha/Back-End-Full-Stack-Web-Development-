
//for a particular posts and user number of values in comments array tells comments of teh post 
//postId will be from postsmodel
//userId will be from userModel
const comments=[];

export class CommentModel{

    // variables
    id;
    userId;
    postId;
    comment;

    constructor(userId,postId,content){
        this.id=comments.length==0?1:comments[comments.length-1].id+1;
        if(comments.length==0){
            this.id=1;
        }else{
            const commentsByPostId=comments.filter((eachComment)=>eachComment.postId==postId);
            if(commentsByPostId.length==0){
                this.id=1;
            }else{
                this.id=commentsByPostId.length+1;
            }
        }
        //the id here is based on postId for a particular post id starts from 0 ;
        this.userId=userId;
        this.postId=postId;
        this.content=content;
    }

    static addCommentToPostModel(userId,postId,content){
        const commentObj=new CommentModel(userId,postId,content);
        comments.push(commentObj);
    }

    static getCommentsByPostId(userId,postId){
        const commentsByPostId=comments.filter((eachComment)=>eachComment.userId==userId && eachComment.postId==postId);
        return commentsByPostId;
    }

    static deleteCommentById(userId,postId,id){
        const commentIndex=comments.findIndex((eachComment)=>eachComment.userId==userId && eachComment.postId==postId && eachComment.id==id);
        if(commentIndex==-1){
            return false;
        }else{
            comments.splice(commentIndex,1);
            return true;
        }
    }

    static updateCommentById(userId,postId,content,id){
        const commentIndex=comments.findIndex((eachComment)=>eachComment.userId==userId && eachComment.postId==postId && eachComment.id==id);
        if(commentIndex==-1){
            return false;
        }else{
            comments[commentIndex].content=content;
            return true;
        }
    }

}