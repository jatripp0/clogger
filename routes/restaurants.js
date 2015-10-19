var express = require('express');
var router = express.Router();

var controller = require('../controller/restaurant');

/* GET restaurants listing */
router.get('/', function(req, res, next) {

  controller.index(function(err, users) {

    if(err) {
      res.status(500);
      res.render('error', {
        message: 'Could not fetch restaurant index',
        error: err
      });
    }

    var data = {
      title: 'Restaurant Listing',
      restaurants: users
    };

     res.render('restaurant/index', data);
   });
});

/* Show a form to add a restaurant */
router.get('/add', function(req, res, next) {
  var data = {
    title: 'Add restaurant',
  };
  res.render('restaurant/add', data);
});

/* Processs a new restaurant */
router.post('/add', function(req, res, next) {
  var input = req.body;
  var data = {
    name: input.name,
    type: input.type,
    healthy: !!input.healthy
  };

  controller.add(data, function(err) {
    if(err) {
      res.status(500);
      res.render('error', {
        message: 'Could not add new restaurant',
        error: err
      });
    }

    res.redirect('..');
  });
});

module.exports = router;
