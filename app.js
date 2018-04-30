var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");
var app = express();

app.set("views", path.join(__dirname, "Templates"));
app.set("view engine", "ejs");

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(require("./Routes/index"));
app.use(require("./Routes/home"));
app.use(require("./Routes/edit"));

app.use(cors());

app.use(express.static(path.join(__dirname, "Client")));
app.use(express.static(path.join(__dirname, "Public")));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function(){
    console.log("--- NodeJs server running on port: " + app.get("port"));
    mongoose.connect("mongodb://localhost/comp308groupproject", function(error, db){
      if(error){
        console.log(">>> ERROR: MongoDB error: " + error.message);
      } else {
        console.log("--- MongoDb running on localhost");
      }
    });
});
