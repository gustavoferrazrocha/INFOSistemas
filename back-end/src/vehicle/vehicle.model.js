const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  id: Number,
  licensePlate: String,
  chassi: String,
  document: String,
  model: String,
  brand: String,
  year: Number,
  image: String
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
