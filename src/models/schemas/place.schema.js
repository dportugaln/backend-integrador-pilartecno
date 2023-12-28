const { Schema, model } = require('mongoose');

const PlaceSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
    // unique: true
  },
  address: {
    type: String,
    required: true
  },
  phone: String,
  email: String,
  location: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  URL_img: [{ type: String }], 
}, {
  timestamps: true
});

module.exports = model('Place', PlaceSchema);