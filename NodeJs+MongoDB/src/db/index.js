import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const ConnectionDB = async () =>{
    try{
        const dataBAseInstance = await mongoose.connect(`${process.env.mongoUrl}/${DB_NAME}`);
        console.log("DataBase Connected Successfully !!!!!!!! \n host : ",dataBAseInstance.connection.host);
    }catch (error){
        console.log("Mongo DB connection Error : ",error);
        process.exit(1);
    }


}

export default ConnectionDB;