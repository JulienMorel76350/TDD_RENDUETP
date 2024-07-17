const express = require("express");
const path = require("path");
const router = express.Router();
const memberController = require("./controllers/memberController");
const orderController = require("./controllers/orderController");

// API routes
router.post("/api/members", memberController.registerMember);
router.post("/api/orders", orderController.createOrder);

// Serve HTML pages
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "memberRegistration.html"));
});

router.get("/productSelection", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "productSelection.html"));
});

router.get("/orderReview", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "orderReview.html"));
});

router.get("/orderConfirmation", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "orderConfirmation.html"));
});

module.exports = router;
