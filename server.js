var express = require("express");
var path= require('path');
var mongoose= require('mongoose');
var logger = require("morgan");

var app = express();
var PORT = process.env.PORT || 3005

var databaseUri= "mongodb://localhost/NewPort";

if (process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI);
}else{
  mongoose.connect(databaseUri)
}


//require model
var Info = require("./Info.js");

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/NewPort", { useNewUrlParser: true });

// Routes



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

// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function(req, res) {
    // Create a new user using req.body
    Info.create(req.body)
      .then(function(dbUser) {
        // If saved successfully, send the the new User document to the client
        // res.render('contact')
        // res.sendStatus(200).send()
        res.redirect('/contact');
      })
      .catch(function(err) {
        // If an error occurs, send the error to the client
        res.redirect('/contact');
        res.json(err);
      });
  });



//app listening on..
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });