const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true}));
const Home = require("./HomeRoute");
app.use("/",Home);
const Router = require("./App-Products/src/routes/ProductsRoutes");
app.use("/Product",Router);

const port = 9080
app.listen(port,()=>{
        console.log("server is runing")
})
