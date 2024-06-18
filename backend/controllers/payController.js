const fs = require("fs");
const path = require("path");

const configPath = path.join(__dirname, "../models/payData.json");

// Helper function to read the config file
const readConfig = () => {
  const data = fs.readFileSync(configPath);
  return JSON.parse(data);
};

// Helper function to write to the config file
const writeConfig = (config) => {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
};

// getPayData

const getPayData = (req, res) => {
  const config = readConfig();
  return res.status(200).json(config);
};

// Toggle control
const toggleControl = (req, res) => {
  const { toggleControlName } = req.body;

  if (
    !toggleControlName ||
    !["payIsActive", "modelIsActive", "testPeriodIsActive"].includes(
      toggleControlName
    )
  ) {
    return res
      .status(400)
      .json({ message: "At least one valid control is required" });
  }

  const config = readConfig();
  config[toggleControlName] = !config[toggleControlName];

  writeConfig(config);

  return res.status(200).json({ message: "Control toggled", config });
};

// Update ticket price
const updateTicketPrice = (req, res) => {
  const { ticketPrice } = req.body;

  if (!ticketPrice) {
    return res.status(400).json({ message: "Ticket price is required" });
  }

  const parsedTicketPrice = parseFloat(ticketPrice);

  if (isNaN(parsedTicketPrice)) {
    return res.status(400).json({ message: "Ticket price must be a number" });
  }

  const config = readConfig();
  config.ticketPrice = parsedTicketPrice;

  writeConfig(config);

  return res.status(200).json({ message: "Ticket price updated", config });
};

// Export the handlers
module.exports = {
  toggleControl,
  updateTicketPrice,
  getPayData,
};
