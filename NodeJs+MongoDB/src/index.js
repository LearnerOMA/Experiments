import dotenv from "dotenv";
dotenv.config({path:".env"});
import express from "express";
import ConnectionDB from "./db/index.js";
import app from "./app.js";

// ConnectionDB is an async function that always return promises.
// Promis is object comes with two methods that is resolve(then) and reject(catch).
ConnectionDB()
.then((result)=>{

    console.log("DB Connected Successfully");
    console.log("result ",result);
    app.on("error",(error)=>{
        console.log("Error in Express Server : ",error);
        
    });
})
.catch((error)=>{
    console.log("DB Connection Error : ",error);
    process.exit(1);
});
