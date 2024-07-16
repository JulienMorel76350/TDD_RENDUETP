const Member = require("../../src/models/member");

test("should validate member with valid data", () => {
  const member = new Member(
    "John",
    "Doe",
    "john.doe@example.com",
    "password123"
  );
  expect(Member.validateMember(member)).toBe(true);
});

test("should not validate member with invalid email", () => {
  const member = new Member("John", "Doe", "invalid-email", "password123");
  expect(Member.validateMember(member)).toBe(false);
});
