// Please don't change the pre-written code
// Import the necessary modules here

const users = [];
let id = 0;
class UserSchema {
  constructor(name, email, password) {
    this.id = ++id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
export const addUser = (data) => {
  // Write your code here
  const {name,email,password}=data;
  users.push(new UserSchema(name,email,password));
};
addUser({ name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" });

export const confirmLogin = (data) => {
  // Write your code here
  const {email,password}=data;
  return users.find((eachUser)=>{
    return eachUser.email==email && eachUser.password==password;
  });
};

export const getAllUsers = () => {
  return users;
};
