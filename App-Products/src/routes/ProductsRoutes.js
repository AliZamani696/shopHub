const express = require("express");
const Router = express.Router();


const IndexRoute = require("./IndexRouter");
Router.get("/Products",IndexRoute.AllProducts)
Router.get("/FindProduct",IndexRoute.FindProduct);
Router.put("/EditProduct",IndexRoute.EditProduct);
Router.delete("/DeleteProduct",IndexRoute.DeleteProduct);
Router.post("/AddProduct",IndexRoute.AddProduct);
module.exports = Router;
