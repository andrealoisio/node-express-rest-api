const request = require("supertest");
const app = require("../app");

describe("Test authentication process", () => {
    test("It should response with not authorized message", done => {
        request(app)
            .post("/login")
            .then(response => {
                expect(response.statusCode).toBe(500);
                expect(response.body.message).toBe("Invalid credentials.");
                done();
            });
    });
});