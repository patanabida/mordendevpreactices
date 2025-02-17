const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080
require("dotenv").config();

app.use(express.json());

app.get("/", (req,res)=>{
    try{
        res.status(201).json({msg:"This is test route"})
    }catch(err){
        res.status(500).json({msg:"Somthing went wrong to route"})
    }
})

app.listen(PORT, ()=>{
    console.log("Server started on the port", PORT)
})