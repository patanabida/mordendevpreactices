const mongoose = require("mongoose");
const connectToDB = async()=>{
    try{
await mongoose.connect(process.env.MONGO_URL);
console.log("Connect to DB",process.env.MONGO_URL)
    }catch(err){
console.log(err);
console.log("Somthing went wrong th connect to db")
    }
};

module.exports = connectToDB