var express = require("express");
var path= require('path')

var app = express();
var PORT = process.env.PORT || 3005

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use(express.static(path.join(__dirname, '/public/style.css')))
app.use(express.static(path.join(__dirname, '/public/')))

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.get("/portfolio", function(req, res) {
    res.render("portfolio");
});

app.get("/contact", function(req, res) {
    res.render("contact");
});



//app listening on..
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });