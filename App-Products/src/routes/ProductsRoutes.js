const express = require("express");
const Router = express.Router();
const path = require("path")


const IndexRoute = require("./IndexRouter");
Router.get("/Products",IndexRoute.AllProducts)
Router.get("/FindProduct",IndexRoute.FindProduct);
Router.put("/EditProduct/:id",IndexRoute.EditProduct);
Router.delete("/DeleteProduct",IndexRoute.DeleteProduct);
Router.post("/AddProduct",IndexRoute.AddProduct);
Router.get("/Category",IndexRoute.Category)



module.exports = Router;
