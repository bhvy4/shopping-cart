const mongoose = require("./connection");

var Schema = mongoose.Schema;

var xyz= new Schema({name:String,image:String,price:String,highlights:[String,String,String,String],description:[String,String],sideimg:[String,String,String]})

var userSchema = mongoose.model('tablets',xyz)


//var User = mongoose.model("xyz",userSchema);
//console.log("schema is ",userSchema)



module.exports = userSchema;