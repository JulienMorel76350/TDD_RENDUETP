const { Builder, By, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser("firefox").build();
});

afterAll(async () => {
  await driver.quit();
});

test("should register a new member using the form", async () => {
  await driver.get("http://localhost:3000/memberRegistration.html");
  await driver.findElement(By.name("firstName")).sendKeys("John");
  await driver.findElement(By.name("lastName")).sendKeys("Doe");
  await driver.findElement(By.name("email")).sendKeys("john.doe@example.com");
  await driver.findElement(By.name("password")).sendKeys("password123");
  await driver.findElement(By.css('input[type="submit"]')).click();
  await driver.wait(until.urlContains("success=true"), 5000);
});
