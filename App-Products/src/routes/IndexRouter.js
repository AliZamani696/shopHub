const BaseRoute = require("./BaseRoute")
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
module.exports = new class extends BaseRoute{
        async AllProducts(req,res){
                res.json(products);
        }
        async FindProduct (req,res){
                let product = products.find(p=>{
                       return (p.id == req.body.id)
                });
        console.log(product);
        };
        async EditProduct(req,res){
                products = products.map(p=>{
                        if(p.id == req.body.id){
                                return p = req.body
                        }
                        return p
                })
                console.log(products)
        }
        async DeleteProduct(req,res){
                products = products.filter(p=>{
                        return(p.id != req.body.id)
                })
                console.log(products)
        }
        async AddProduct(req,res){
                products.push(req.body);
                console.log(products)
        }

}
