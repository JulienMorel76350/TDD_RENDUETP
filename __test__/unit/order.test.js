const Order = require("../../src/models/order");
const mongoose = require("mongoose");

beforeAll(async () => {
  await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.zgtmr0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
});

afterAll(async () => {
  await mongoose.connection.close();
});

test("should calculate total for order", async () => {
  const items = [
    { category: "Haut", item: "T-shirt", price: 20 },
    { category: "Bas", item: "Pantalons", price: 30 },
  ];
  const orderData = { memberId: new mongoose.Types.ObjectId(), items };
  const order = new Order(orderData);

  await order.save();
  expect(order.total).toBe(50);
});
