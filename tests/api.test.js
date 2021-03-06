const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
    test("It should response the GET method", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body.mensagem).toBe("OK");
                done();
            });
    });
    test("It should response the GET method on /ping endpoing", done => {
        request(app)
            .get("/ping")
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.text).toBe("pong");
                done();
            });
    });
});