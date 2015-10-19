var Restaurant = require('../models/restaurant');

var RestaurantController = {
  add: function(user, next){
    var newRestaurant = new Restaurant(user);

    newRestaurant.save(next);
  },
  index: function(query, next) {
    Restaurant.find(query, next);
  }
};


module.exports = RestaurantController;
