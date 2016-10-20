var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "/client")));
app.use(express.static(path.join(__dirname, "/bower_components")));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require("./server/config/routes.js")(app);//must be after body parser

app.listen(8000, function(){
    console.log("listening on port 8000");
});
