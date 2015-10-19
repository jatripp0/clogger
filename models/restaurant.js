var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  name: String,
  type: String,
  healthy: Boolean,
  created: {type: Date, default: Date.now}
});

var Restaurant =  mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
