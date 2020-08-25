const supertest = require('supertest');
const app = require('../app');
const url = '/';

app.get('/', function (req, res) {
  res.status(200).json(SampleIncidents);
});

describe('server', () => {
  it('can run the tests', () => {
    expect(true).toBeTruthy();
  });

  describe(url, function () {
    it('has process.env.DB_ENV as "testing"', () => {
      expect(process.env.DB_ENV).toBe('test');
    });
    supertest(app).get('/').expect(200);
  });
});
