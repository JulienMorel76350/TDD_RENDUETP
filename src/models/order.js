const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      category: { type: String, required: true },
      item: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
