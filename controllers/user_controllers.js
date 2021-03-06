var express = require('express');
var passport = require('passport');
//var Users = require('../models/users.models.js');
var router = express.Router();


router.get('/', function (req, res) {
  res.render('index', { user : req.user  });
});

router.get('/register', function(req, res) {
  res.render('register', {  });
});

router.post('/register', function(req, res, next) {
  Users.register(new Users({ username : req.body.username  }), req.body.password, function(err, Users) {
    if (err) {
      return res.render('register', { error : err.message  });
    }

    passport.authenticate('local')(req, res, function () {
      req.session.save(function (err) {
        if (err) {
	  return next(err);
	}
        res.redirect('/');
      });
    });
  });
});

router.get('/login', function(req, res) {
  console.log("logogogogogo+");
  res.render('login', { user : req.user  });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});

module.exports = router;
