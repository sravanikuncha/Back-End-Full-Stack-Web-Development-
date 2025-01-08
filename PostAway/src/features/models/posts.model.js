

//posts array tells nr of posts ;
const posts=[];

export class PostModel{
    
    // variables
    id;
    userId;
    caption;
    imageUrl;

    constructor(userId,caption,imageUrl){
        this.id=posts.length==0?1:posts[posts.length-1].id+1;
        this.userId=userId;
        this.caption=caption;
        const imagePaths=[];
        imageUrl.forEach((eachImage)=>{
            imagePaths.push(eachImage.path);
        });
        this.imageUrl=imagePaths;
    }

    static getAllPostsModel(){
        return posts;
    }

    static getPostById(id){
        return posts.find((eachPost)=>eachPost.id==id);
    }

    static getPostBbyuserId(userId){
        return posts.filter((eachPost)=>eachPost.userId==userId);
    }

    static createNewPost(userId,caption,imageUrl){
        const postsObj=new PostModel(userId,caption,imageUrl);
        posts.push(postsObj);
        return postsObj;
    }

    static deletePostById(id){
        const postIndex=posts.findIndex((eachPost)=>eachPost.id==id);
        console.log(postIndex);
        if(postIndex==-1){
            return false;
        }
        posts.splice(postIndex,1);
        return true;
    }

    static updatePostById(id,caption,imageUrl){
        const postIndex=posts.findIndex((eachPost)=>eachPost.id==id);
        if(postIndex==-1){
            return false;
        }
        console.log(caption+" "+imageUrl);
        if(caption){
            posts[postIndex].caption=caption;
        }
        if(imageUrl){
            const imagePaths=[];
            imageUrl.forEach((eachImage)=>{
                imagePaths.push(eachImage.path);
            });
            console.log(imagePaths)
            posts[postIndex].imageUrl=imagePaths;
        }
        return posts[postIndex];
    }

}