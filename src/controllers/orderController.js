const Order = require("../models/order");

exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).send(newOrder);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
