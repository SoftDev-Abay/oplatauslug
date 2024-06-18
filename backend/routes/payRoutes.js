const express = require("express");
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);

const {
  toggleControl,
  updateTicketPrice,
  getPayData,
} = require("../controllers/payController");

router.route("/get-pay-data").get(getPayData);

router.route("/toggle-control").post(toggleControl);

router.route("/update-ticket-price").post(updateTicketPrice);

module.exports = router;
