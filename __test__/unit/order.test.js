const Order = require("../../src/models/order");

test("should calculate total for order", () => {
  const items = [
    { category: "Hauts", item: "T-shirt", price: 20 },
    { category: "Bas", item: "Pantalons", price: 30 },
  ];
  const order = new Order(1, items);
  expect(order.total).toBe(50);
});
