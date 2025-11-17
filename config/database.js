const mongoose  = require("mongoose");

const connectDB = async=>{
       try{
                const conn = mongoose.connect("mongodb://localhost:27017/ShupHub");
                console.log(`MongoDB Connected: ⚡️✅`);
       }catch(err){
                console.error("Database connection error ❌❌:",err)
       }
}
module.exports = connectDB
