const superGoose = require('@code-fellows/supergoose');
const { server } = require('../../../../src/app');

const mockRequest = superGoose(server);

describe('Test the server', () => {
  it('should give a 404 on a bad route request. ', () => {
    return mockRequest
      .get('/')
      .then(response => {
        expect(response.status).toBe(404);
      })
  })

  it('should give a 500 on an internal server error.', () => {
    return mockRequest
      .get('/badRoute')
      .then(response => {
        expect(response.status).toBe(500);
      })
  })
})