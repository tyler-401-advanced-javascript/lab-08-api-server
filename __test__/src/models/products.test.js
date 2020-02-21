const Products = require('../../../src/models/Products');
require('@code-fellows/supergoose');

const products = new Products();

describe('Categories Model. ', () => {

  it('can create() a new product and read it', () => {
    const testObject = { name: 'banana' }
    return products.create(testObject)
      .then(results => {
        expect(results.name).toBe('banana')
        return results._id
      })
      .then( results => {
        return products.read(results)
          .then((results) => {
            expect(results[0].name).toBe('banana')
          })
      })
  })

  it('can get all products', () => {
    return products.read()
      .then(results => {
        expect(results.length).toBe(1)
      })
  })

  it('can update a product', () => {
    const testObject = { name: 'banana', category: 'fruit'}
    return products.create(testObject)
      .then(results => {
        expect(results.name).toBe('banana')
        return results._id
      })
      .then((results) => {
        return products.update(results._id, { name: 'orange'})
          .then(results => {
            expect(results.name).toBe('orange')
            expect(results.category).toBe('fruit')
          })
      })
  })

  it('can delete a product', () => {
    const testObject = { name: 'banana' }
    return products.create(testObject)
      .then(results => {
        expect(results.name).toBe('banana')
        return results._id
      })
      .then((results) => {
        return products.delete(results._id)
          .then(results => {
            expect(results.name).toBe('banana')
          })
      })
  })

})