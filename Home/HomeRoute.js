const express = require("express");
const path = require("path")

const Home = express.Router();
const{getAllproducts}= require("./../App-Products/src/routes/IndexRouter")

Home.get("/",async(req,res)=>{
        let products = await getAllproducts()
        res.render("Home",{products})

})
Home.get("/About",(req,res)=>{
        res.render("About")
})
Home.get("/Contact",(req,res)=>{
        res.render("Contact")
})

Home.post("/SearchBar",(req,res)=>{
        console.log(req.body)
})

module.exports = Home
