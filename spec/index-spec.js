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
});
