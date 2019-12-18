const request = require('request');
const server = require('../index.js');

const baseUrl = 'http://localhost:3000/';

describe('server', () => {
  afterAll(() => server.close());
  describe('GET /', () => {
    it('returns status code 200', (done) => {
      request.get(baseUrl, (error, response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
  describe('GET /test', () => {
    it('redirects to /', (done) => {
      request.get(baseUrl, (error, response) => {
        expect(response.request.href).toBe(baseUrl);
        done();
      });
    });
  });
});
