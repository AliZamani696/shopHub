const BaseRoute = require("./BaseRoute")
const  ensureDirectory = require("./../../../AdminDashboard/uploads/UploadScript")
module.exports = new class extends BaseRoute{
        async getAllproducts(req,res){
                try{
                        const ProductModel = require("./../models/ProductModels");
                        const products = await ProductModel.find()
                        return products;
                }catch(err){
                        console.log(err)
                }
          }
        async AllProducts (req,res){
                try{
                        const ProductModel = require("./../models/ProductModels");
                        const products = await ProductModel.find()
                        res.render("AllProducts",{products})
                }catch(err){
                        console.error(err)
                }
        }
        async FindProduct (req,res){
                try{
                        const ProductModel = require("./../models/ProductModels");
                        const productName = req.body.productName
                        const FindProduct =await  ProductModel.find({productName})
                }catch(err){
                        console.log(err)
                }
        };
        async EditProduct(req,res){
                     try{
                        const ProductModel = require("./../models/ProductModels");
                        const productId = req.params.id
                        const UpdateProduct = req.body
                        const FindProduct =await  ProductModel.findByIdAndUpdate(
                                productId,
                                UpdateProduct,
                                {new:true, runValidators: true}
                        )
                        console.log(FindProduct)
                }catch(err){
                        console.log(err)
                }
        }
        async DeleteProduct(req,res){
                products = products.filter(p=>{
                        return(p.id != req.body.id)
                })
                console.log(products)
        }
        async AddProduct(req,res){
        //       try{
        //           const {
        //                 productName,
        //                 productCategory,
        //                 productPrice,
        //                 productStock,
        //                 productDescription,} = req.body
        //                 const ProductModel = require("./../models/ProductModels");
        //                 let NewProduct = new ProductModel({
        //                         productName,
        //                         productCategory,
        //                         productPrice,
        //                         productStock,
        //                         productDescription,
        //                 })
        //                 NewProduct.save()
        //                 res.render("AdminDashboard")

        //       }catch(err){
        //         console.error(err)
        //       }
        await ensureDirectory("./Home/public/images");

        }
        async  Category(req,res){
                res.render("Category")
        }
}
