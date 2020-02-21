const Customers = require('../../../src/models/Customers');
require('@code-fellows/supergoose');

const customers = new Customers();

describe('Customers Model. ', () => {

  it('can create() a new customer and read that category', () => {
    const testObject = { name: 'tyler', leetLevel: 12 }
    return customers.create(testObject)
      .then(results => {
        expect(results.name).toBe('tyler')
        return results._id
      })
      .then( results => {
        return customers.read(results)
          .then((results) => {
            expect(results[0].name).toBe('tyler')
          })
      })
  })

  it('can get all customers', () => {
    return customers.read()
      .then(results => {
        expect(results.length).toBe(1);
      })
  })

  it('can update a customer', () => {
    const testObject = { name: 'tyler', leetLevel: 12 }
    return customers.create(testObject)
      .then(results => {
        expect(results.name).toBe('tyler');
        expect(results.leetLevel).toBe(12);
        return results._id;
      })
      .then((results) => {
        return customers.update(results._id, { name: 'orange', leetLevel: 9 })
          .then(results => {
            expect(results.name).toBe('orange');
          })
      })
  })

  it('can delete a customer', () => {
    const testObject = { name: 'tyler', leetLevel: 13 }
    return customers.create(testObject)
      .then((results) => {
        return customers.delete(results._id)
          .then(results => {
            expect(results.name).toBe('tyler')
          })
      })
  })

})