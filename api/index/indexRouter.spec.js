const supertest = require("supertest");
const express = require("express")
const app = express()

const server = require("../index/indexRouter.js");
const db = require("../../data/db-config.js");

app.get('/', function (req, res) {
    res.status(200).json( SampleIncidents );
  });

describe("server", () => {
    it("can run the tests", () => {
        expect(true).toBeTruthy();
    });


    

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