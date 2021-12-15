const app = require('../server');
const supertest = require("supertest");



test("GET /tmr", async () => {
  const response = await supertest(app).get("/trm");
  expect(response.statusCode).toBe(200);
  });
