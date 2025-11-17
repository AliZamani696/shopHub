const express = require("express");


const ViewsRoutes = require("./Home/ViewsRoutes")
const app = express();
app.set("view engine","ejs");
app.set("views",ViewsRoutes);
app.set(express.static("public"))
app.use(express.urlencoded({extended:true}));


const Home = require("./Home/HomeRoute");
app.use("/",Home);

const AdminRoute = require("./AdminDashboard/AdminRoute");
app.use("/AdminDashboard",AdminRoute);

const Router = require("./App-Products/src/routes/ProductsRoutes");
app.use("/Product",Router);

const connectDB = require("./config/database");
connectDB()

const port = require("./config/port")
app.listen(port,()=>{
        console.log("server is runing")
})
