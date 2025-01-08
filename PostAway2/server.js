import { server } from "./index.js";
import { configDB } from "./src/config/mongooseConfig.js";

server.listen(3000,()=>{
    console.log("server is listening at port 3000");
    configDB();
})