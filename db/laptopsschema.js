const mongoose = require("./connection");

var Schema = mongoose.Schema;

var abc= new Schema({name:String,image:String,price:String,highlights:[String,String,String,String,String],description:[String,String],sideimg:[String,String,String]})

var userSchema = mongoose.model('laptops',abc)





module.exports = userSchema;