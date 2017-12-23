var express = require('express');
var route = express.Router();
route.post('/signup',function(req,res){//when click register redirect to the login page
   // console.log("I am in student")
var user=req.body.usernameS;
var pswrd=req.body.passwordS;
const userOperations =  require("../db/crud.js");
const User = require("../helpers/User.js");
const userObject = new User(user,pswrd);
userOperations.add(userObject,res);

})
route.post('/login',function(req,res){//when click register redirect to the login page
   // console.log("I am in student")
var user=req.body.username;
var pswrd=req.body.password;
const userOperations =  require("../db/crud.js");
const User = require("../helpers/User.js");
const userObject = new User(user,pswrd);
userOperations.find(userObject,res,req);

})
module.exports = route;