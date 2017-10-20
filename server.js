// Include Server Dependencies
const express = require("express"),
      bodyParser = require("body-parser"),
      logger = require("morgan"),
      mongoose = require("mongoose");
var LocalStrategy = require('passport-local').Strategy;
//passport & routes
const routes        = require("./controllers/user_controllers.js"),
      passport      = require('passport'),
      session       = require('express-session'),
      //env           = require('dotenv').load(),
      compression   = require('compression'),
      cookieSession = require('cookie-session');

/*
 * 
  const Print = (event) => {
    const e = event.nativeEvent;
    const name = e.target[0].value;
    const number = e.target[1].value;
    this.setState({name, number})
  }
 */


// Require History Schema
const History = require("./models/Users");
const Users = require("./models/Users");


// Create Instance of Express
const app = express();
// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3333;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------
// MongoDB Configuration configuration (Change this URL to your own DB)
  if(process.env.NODE_ENV == 'production'){
   mongoose.connect(' mongodb://heroku_n0b2f9cr:5835q8j7ckdr549bfk7gv0msmg@ds135592.mlab.com:35592/heroku_n0b2f9cr');
 } else {
  mongoose.connect(`mongodb://localhost/Users`);
}

let db = mongoose.connection;

db.on('error', (err) => {
  console.log('Mongoose Error: ', err);
});

db.once('open', () => {
  console.log('Mongoose connection successful.');
});
// -------------------------------------------------

//---need to go into user_controllers.js
app.use(function(req, res, next) {
  console.log('Something is happening app.use function from server.js.');
  next();
});


// This is the route we will send POST requests to save each search.
app.post("/register", function(req, res) {
  console.log("BODY: " + req.body);
  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  Users.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    emailaddress: req.body.emailaddress,
    password: req.body.password,
    data: req.body.data,
    date: Date.now()
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else { res.send("Saved Search");
     }
   });
 });


app.get("/register", function(req, res) {
  console.log("BODY/register: " + req.body);
  // We will find all the records, sort it in descending order, then limit the records to 5
  Users.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
  console.log("LOOK! .get /api route", req.body);
});
app.use('/', routes);





// -------------------------------------------------
// Listener //
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});


