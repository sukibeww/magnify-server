const request = require('supertest');
const app = require('../../app');

describe('Vacancies', () => {
  describe('GET /vacancies', () => {
    it('resonds with json', async done => {
      const response = await request(app).get('/vacancies');
      console.log(response);
      expect(response.statusCode).toEqual(200);
      done();
    })
  })
})