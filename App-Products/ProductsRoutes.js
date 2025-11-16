const express = require("express");
const Router = express.Router();
let products = [
        //pname sort is product name
        {
                id:1,
                Pname : "phone"
        },
        {
                id:2,
                Pname : "tv"
        }
]


Router.get("/products",(req,res)=>{
        res.json(products);
})
Router.get("/FindProduct",(req,res)=>{
        let product = products.find(p=>{
                if(p.id == req.body.id){
                        return p;
                };
        });
        console.log(product);
});
Router.put("/EditProduct",(req,res)=>{
        products = products.map(p=>{
                if(p.id == req.body.id){
                        return p = req.body
                }
                return p
        })
        console.log(products)
});
Router.delete("/DeleteProduct",(req,res)=>{
        products = products.filter(p=>{
                return(p.id != req.body.id)
        })
        console.log(products)
});
Router.post("/AddProduct",(req,res)=>{
        products.push(req.body);
        console.log(products)
})
module.exports = Router;
