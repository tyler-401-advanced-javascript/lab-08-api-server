const Orders = require('../../../src/models/Orders');
require('@code-fellows/supergoose');

const orders = new Orders();

describe('Orders Model. ', () => {

  it('can create() a new order and read that order', () => {
    const testObject = { customer:'tyler', product:["skis", "boots", "poles"], total:999 }
    return orders.create(testObject)
      .then(results => {
        expect(results.customer).toBe('tyler')
        return results._id
      })
      .then( results => {
        return orders.read(results)
          .then((results) => {
            expect(results[0].customer).toBe('tyler')
          })
      })
  })

  it('can get all orders', () => {
    return orders.read()
      .then(results => {
        expect(results.length).toBe(1);
      })
  })

  it('can update an order', () => {
    const testObject = {  customer:'tyler', product:["skis", "boots", "poles"], total:999 }
    return orders.create(testObject)
      .then(results => {
        expect(results.customer).toBe('tyler');
        expect(results.total).toBe(999);
        return results._id;
      })
      .then((results) => {
        return orders.update(results._id, {  customer:'orange', product:["skis", "boots", "poles"], total:1 })
          .then(results => {
            expect(results.customer).toBe('orange');
            expect(results.total).toBe(1)
          })
      })
  })

  it('can delete an order', () => {
    const testObject = {  customer:'tyler', product:["skis", "boots", "poles"], total:999 }
    return orders.create(testObject)
      .then((results) => {
        return orders.delete(results._id)
          .then(results => {
            expect(results.customer).toBe('tyler')
          })
      })
  })

})