const users=[];

export class UserModel{

    // variables
    id;
    name;
    email;
    password;

    constructor(id,name,email,password){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
    }

    static addUser(name,email,password){
        const id=users.length==0?1:users[users.length-1]+1;
        const userObj=new UserModel(id,name,email,password);
        users.push(userObj);
    }

    static validateUser(email,password){
        return users.find((eachUser)=>eachUser.email==email && eachUser.password==password);
    }
}