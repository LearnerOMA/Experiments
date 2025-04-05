const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
port = process.env.PORT

console.log("Hello World");

const login = (req,res)=>{
    res.send("Login successfull");
}
function logout(req,res){
    res.send("Logout successfull not yes");

}
app.get('/',login)  ;
app.get("/logout",logout);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
