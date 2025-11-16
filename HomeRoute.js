const express = require("express");
const Home = express.Router();

Home.get("/",(req,res)=>{
        res.send("home")
})
module.exports = Home
