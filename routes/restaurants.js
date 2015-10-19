var express = require('express');
var router = express.Router();

var restaurants = [];

/* GET restaurants listing */
router.get('/', function(req, res, next) {
  var data = {
    title: 'Restaurant Listing',
    restaurants: restaurants
  };

   res.render('restaurant/index', data);
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

  restaurants.push(data);

  console.log(restaurants);

  res.redirect('..');
});

module.exports = router;
