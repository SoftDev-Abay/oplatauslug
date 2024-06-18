const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    default: ["Employee"],
  },
  active: {
    type: Boolean,
    default: true,
  },
  full_name: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);

//  sample request for creating a new user

// Khiva
// Bukhara
// Samarkand

//  {
//     "username": "assel",
//     "password": "password",
//     "roles": ["Employee"],
//     "active": true,
//     "full_name": "nurlybaeva assel omirbaevna",
//     "city": "Khiva"
//  }
