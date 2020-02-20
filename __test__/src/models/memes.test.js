const Memes = require('../../../src/models/memes');
require('@code-fellows/supergoose');

const memes = new Memes();

describe('Memes Model. ', () => {
  it('can create() a new meme', () => {
    const testObject = {
      template: 'Gal brain',
      textBoxes: ['one', 'tw0', 'three'],
      imageUrl: 'http://tylersayvetz.com/memes.jpg'
    }

    return memes.create(testObject)
      .then(results => {
        //check if the resulting record that was created is equal to the test object above. 
      })


  })
})