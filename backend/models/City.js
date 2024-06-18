const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  controls: {
    payIsActive: {
      type: Boolean,
      default: false,
    },
    modelIsActive: {
      type: Boolean,
      default: true,
    },
    testPeriodIsActive: {
      type: Boolean,
      default: true,
    },
  },
  ticket_price: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("City", citySchema);

// sample request for creating a new city
// {
//     "name": "Khiva",
//     "controls": {
//         "payIsActive": true,
//         "modelIsActive": true,
//         "testPeriodIsActive": true
//     },
//     "ticket_price": 100
// }
