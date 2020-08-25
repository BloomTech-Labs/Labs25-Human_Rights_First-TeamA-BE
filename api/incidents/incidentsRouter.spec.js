const supertest = require('supertest');
const app = require('../app');
const url = '/incidents';

describe('server', () => {
  it('can run the tests', () => {
    expect(true).toBeTruthy();
  });

  describe('GET /', function () {
    it('has process.env.DB_ENV as "testing"', () => {
      expect(process.env.DB_ENV).toBe('test');
    });

    it('responds with json', function (done) {
      supertest(app)
        .get('/incidents')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET / fetches sample data', () => {
    it('should return with http status code 200 ', async () => {
      const incidents = await supertest(app)
        .get(url)
        .then((response) => {
          expect(200);
          return response;
        });
      expect(incidents.body[0].id).toBe(1);
    });
  });
});
