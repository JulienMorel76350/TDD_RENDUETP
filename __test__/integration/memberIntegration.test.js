const request = require("supertest");
const app = require("../../src/app");

test("should register a new member", async () => {
  const response = await request(app).post("/register").send({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "password123",
  });
  expect(response.status).toBe(302);
  expect(response.headers.location).toBe(
    "/memberRegistration.html?success=true"
  );
});
