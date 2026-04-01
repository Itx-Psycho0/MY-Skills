import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello, World!");
});

app.get("/api",(req,res)=>{
    res.json({message:"Welcome to the API!"});
});

app.get("/home",(req,res)=>{
    res.send("<h1>Home Page</h1><p>This is the home page of our simple Express server.</p>");
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});

