const request = require("supertest");
const app = require("../../src/app");

test("should create a new order and associate with member", async () => {
  const response = await request(app).post("/selectProducts").send({
    headgear: "none",
    tops: "tshirt",
    bottoms: "pants",
    shoes: "sneakers",
  });
  expect(response.status).toBe(302);
  expect(response.headers.location).toBe("/orderReview.html");
});
