const request = require("supertest");
const app = require("../app");
const credentials = {user: "andrealoisio", password: "password123@"}

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
    test("It should response an authorized message", done => {
        request(app)
            .post("/login")
            .send(credentials)
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body.auth).toBe(true);
                done();
            });
    });
    test("It should response with message: No token provied", done => {
        request(app)
            .get("/authenticated-ping")
            .then(response => {
                expect(response.statusCode).toBe(401);
                expect(response.body.auth).toBe(false);
                expect(response.body.message).toBe("No token provided.");
                done();
            });
    });
    test("It should access an authenticated route with jwt token", done => {
        request(app)
            .post("/login")
            .send(credentials)
            .then(response => {
                expect(response.statusCode).toBe(200);
                let jwtToken = response.body.token;
                request(app)
                    .get("/authenticated-ping")
                    .set('x-access-token', jwtToken)
                    .then(response => {
                        expect(response.statusCode).toBe(200);
                        expect(response.text).toBe("pong");
                        done();
                    });
            });
    });
});