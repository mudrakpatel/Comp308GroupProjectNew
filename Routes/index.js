var express = require("express");
var router = express.Router();
var User = require("../Models/User.model.js");

router.get("/", function(request, response, next){
  response.render("index");
});

router.get("/findAll", function(request, response, next){
  //response.render("index");
  User.find(function(error, Users){
    if(error){
      console.log(">>> MongoDB Error: " + error.message);
      response.status(500).send(error);
    } else{
      console.log("--- List of users found from database:");
      Users.forEach(function(user){
        console.log(user);
      });
      response.status(200).send(Users);
    }
  });
});

router.post("/", function(request, response, next){
  var userToAdd = new User(request.body);
  userToAdd.save(function (error, newUser) {
    if (error) {
      console.log(">>> MongoDB Error:" + error.message);
    }else{
      console.log(newUser);
      //response.render("home.ejs");
      }
  });//save
});

module.exports = router;
