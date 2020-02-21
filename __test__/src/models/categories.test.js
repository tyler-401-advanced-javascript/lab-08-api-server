const Categories = require('../../../src/models/Categories');
require('@code-fellows/supergoose');

const categories = new Categories();

describe('Categories Model. ', () => {

  it('can create() a new category and read that category', () => {
    const testObject = { name: 'banana' }
    return categories.create(testObject)
      .then(results => {
        expect(results.name).toBe('banana')
        return results._id
      })
      .then( results => {
        return categories.read(results)
          .then((results) => {
            expect(results[0].name).toBe('banana')
          })
      })
  })

  it('can get all categories', () => {
    return categories.read()
      .then(results => {
        expect(results.length).toBe(1)
      })
  })

  it('can update a category', () => {
    const testObject = { name: 'banana' }
    return categories.create(testObject)
      .then(results => {
        expect(results.name).toBe('banana')
        return results._id
      })
      .then((results) => {
        return categories.update(results._id, { name: 'orange'})
          .then(results => {
            expect(results.name).toBe('orange')
          })
      })
  })

  it('can delete a category', () => {
    const testObject = { name: 'banana' }
    return categories.create(testObject)
      .then(results => {
        expect(results.name).toBe('banana')
        return results._id
      })
      .then((results) => {
        return categories.delete(results._id)
          .then(results => {
            expect(results.name).toBe('banana')
          })
      })
  })

})