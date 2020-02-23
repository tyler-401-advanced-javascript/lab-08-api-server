const superGoose = require('@code-fellows/supergoose');
const { server } = require('../../src/app');
const mockRequest = superGoose(server);


describe('Test the server error handlers', () => {
  it('should give a 404 on a bad route request. ', () => {
    return mockRequest
      .get('/')
      .then(results => {
        expect(results.status).toBe(404);
      })
  })

  it('should give a 500 on an internal server error.', () => {
    return mockRequest
      .get('/badRoute')
      .then(results => {
        expect(results.status).toBe(500);
        return mockRequest
          .get('/doesntExist')
      })
      .then(response => {
        expect(response.status).toBe(500);
      })

  })
})

describe('Test the route handlers', () => {
  it('handleGet() should respond 200', () => {
    return mockRequest
      .get('/categories')
      .then(results => {
        expect(results.status).toBe(200);
        return mockRequest
          .get('/products')
      })
      .then(results => {
        expect(results.status).toBe(200);
        return mockRequest
          .get('/customers')
      })
      .then(results => {
        expect(results.status).toBe(200);
        return mockRequest
          .get('/orders')
      })
      .then(results => {
        expect(results.status).toBe(200);
      })
  })

  it('The handlePost() should respond 201, handlePut() should respond 202, handleDelete() should reutrn a 200', () => {
    return mockRequest
      .post('/categories')
      .send({ name: 'sandwiches' })
      .then(results => {
        expect(results.status).toBe(201);
        return mockRequest
          .put(`/categories/${results.body._id}`)
          .send({ name: 'meatsticks' })
      })
      .then(results => {
        expect(results.status).toBe(202);
        expect(results.body.name).toBe('meatsticks')
        console.log(results.body)
        return mockRequest
          .delete(`/categories/${results.body._id}`)
      })
      .then(results => {
        expect(results.status).toBe(200);

      })
  })


})