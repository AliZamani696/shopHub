const express = require("express");
const AdminRoute = express.Router();
const path = require("path")
AdminRoute.use(express.static(path.join(__dirname+"/public")))

AdminRoute.get("/Dashboard",(req,res)=>{
        res.render("AdminDashboard")
})


module.exports = AdminRoute
