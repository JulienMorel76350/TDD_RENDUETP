const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../src/app"); // Votre application Express configurée
const Member = require("../../src/models/member");

beforeAll(async () => {
  await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.zgtmr0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  );
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Order Integration Tests", () => {
  beforeEach(async () => {
    await Member.deleteMany(); // Nettoyer la collection Member avant chaque test
  });

  test("should create a new order and associate with member", async () => {
    // Créer un membre pour associer la commande
    const member = await Member.create({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "password123",
    });

    // Simuler une requête POST pour créer une commande
    const response = await request(app)
      .post("/createOrder")
      .send({
        memberId: member._id, // Utiliser l'ID du membre créé
        products: ["Product 1", "Product 2"], // Exemple de produits
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("orderId");
    expect(response.body).toHaveProperty("memberId", member._id.toString());
  });
});
