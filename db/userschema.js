const mongoose = require("./connection");

var Schema = mongoose.Schema;



var userSchema = new Schema({name :string,userid:String,password:String});

var User = mongoose.model("usermasters",userSchema);

module.exports = User;