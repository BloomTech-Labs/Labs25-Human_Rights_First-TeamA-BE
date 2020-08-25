const supertest = require("supertest");
const express = require("express")
const app = express()

const server = require("../index/indexRouter.js");
const db = require("../../data/db-config.js");

describe("server", () => {
    it("can run the tests", () => {
        expect(true).toBeTruthy();
    });

    // describe("GET /", () => {
    //     it("should return with http status code 200 ", () => {
    //             supertest(server)
    //                 .get("/incidents")
    //                 .then(response => {
    //                     expect(response.status).toBe(200)
    //                 })
    //     })
    // })
    

    describe('GET /', function() {

        it('has process.env.DB_ENV as "testing"', () => {
            expect(process.env.DB_ENV).toBe('testing');
        });

        it('responds with json', function(done) {
          supertest(app)
            .get('/incidents')
            // .set('Accept', 'application/json')
            // .expect('Content-Type', /json/)
            .expect(200, done);
        });
      });

});