const express = require('express') ;
const router = express.Router();


router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});





router.get("/api", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  User.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
router.post("/api", function(req, res) {
  
  console.log("BODY: " + req.body);

  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    emailaddress: req.body.emailaddress,
    password: req.body.password,
    date: Date.now()
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else { res.send("Saved Search");
     }
   });
 });

module.exports = router;










//--- login helper function for Passport --------------//
// This lets us add the argument isLoggedIn to GET routes for rendering hbs pages to make them accessible only when a user is logged in; if user isn't logged in, it redirects to the login page
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}
//--- login helper function --------------//


