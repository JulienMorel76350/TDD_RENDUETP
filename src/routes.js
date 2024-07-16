const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");
const orderController = require("./controllers/orderController");

// Route pour la racine
router.get("/", (req, res) => {
  res.redirect("/memberRegistration.html");
});

router.post("/register", memberController.register);
router.post("/selectProducts", orderController.selectProducts);
router.get("/orderReview.html", orderController.reviewOrder);
router.post("/confirmOrder", orderController.confirmOrder);
router.get("/orderConfirmation.html", orderController.orderConfirmation);

module.exports = router;
