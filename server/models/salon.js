const mongoose = require("mongoose"),
      Schema   = mongoose.Schema;

var SalonSchema = new mongoose.Schema({
  name: String,
  identityname: { type: String, unique: true },
  price: Number,
  rates: { type: [Number], min: 0, max: 5 },
  avarage: Number,
  address: String,
  postnumber: String,
  city: String,
  web: String,
  phone: String,
  description: String,
  // Storing minutes in hours
  hours: {
    mon: { open: { type: Number, min: 0, max: 1440 }, close: { type: Number, min: 0, max: 1440 } },
    tue: { open: { type: Number, min: 0, max: 1440 }, close: { type: Number, min: 0, max: 1440 } },
    wed: { open: { type: Number, min: 0, max: 1440 }, close: { type: Number, min: 0, max: 1440 } },
    thu: { open: { type: Number, min: 0, max: 1440 }, close: { type: Number, min: 0, max: 1440 } },
    fri: { open: { type: Number, min: 0, max: 1440 }, close: { type: Number, min: 0, max: 1440 } },
    sat: { open: { type: Number, min: 0, max: 1440 }, close: { type: Number, min: 0, max: 1440 } },
    sun: { open: { type: Number, min: 0, max: 1440 }, close: { type: Number, min: 0, max: 1440 } }
  }

});

module.exports = mongoose.model("Salon", SalonSchema);
