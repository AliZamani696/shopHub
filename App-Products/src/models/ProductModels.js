
const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
        productName :{
                type : String,
                required: [true, 'Product name is required'],
                trim: true,
                minlength: [2, 'Product name must be at least 2 characters long'],
                maxlength: [100, 'Product name cannot exceed 100 characters']
        },
        productCategory:{
                type: String,
                required: [true, 'Product category is required'],
                // enum: {
                //         values: ['electronics', 'home', 'fashion', 'toys', 'books', 'stationery'],
                //         message: 'Please select a valid category'
                // }
        },
        productPrice: {
                type: Number,
                required: [true, 'Product price is required'],
                min: [20, 'Price cannot be negative'],
                validate:{
                        validator:function(price){
                                return /^\d+(\.d{1,2})?$/.test(price.toString());
                        },
                        message: 'Price can have maximum 2 decimal places'
                }
        },
        productStock:{
                type: Number,
                required: [true, 'Product stock is required'],
                min: [0, 'Stock cannot be negative'],
                default: 1,
                validate:{
                        validator:Number.isInteger,
                        message: 'Stock must be an integer'
                }
        },
        productDescription:{
                type: String,
                required: [true, 'Product description is required'],
                minlength: [10, 'Description must be at least 10 characters long'],
                maxlength: [1000, 'Description cannot exceed 1000 characters'],
                // validate:{
                //         validator:function(desc){
                //                 const wordCount = desc.trim().split(/\s+/).length;
                //                 return wordCount >= 10
                //         },
                //         message: 'Description must contain at least 10 words'
                // }

        },
        productImagePath :{
                 type: String, // This will store the image URL or file path
    required: [true, 'Product image is required']
        },
        productNew:{
                type:Boolean,
                default:false,

        },
            productSale:{
                type:Boolean,
                default:false,

        },
})
module.exports = mongoose.model('Product', ProductSchema);
