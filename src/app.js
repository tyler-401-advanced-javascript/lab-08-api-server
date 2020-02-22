const express = require('express');
const morgan = require('morgan')
const app = express();
const cors = require('cors')


const { handleGet, handlePost, handlePut, handleDelete } = require('./api/lib/routeHandlers');

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors())


//models
const Categories = require('./models/Categories');
const Products = require('./models/Products');
const Customers = require('./models/Customers');
const Orders = require('./models/Orders.js');

//instances
const customers = new Customers();
const categories = new Categories();
const products = new Products();
const orders = new Orders();

//param senses when 'model' param exists and envokes getModelType middleware
app.param('model', getModelType);

//app-level routes
app.get('/:model', handleGet);
app.get('/:model/:id', handleGet);
app.post('/:model', handlePost);
app.put('/:model/:id', handlePut);
app.delete('/:model/:id', handleDelete);

app.get('/badRoute', (req, res, next) => {
  throw new Error('You want errors? You get errors. Happy?!')
})




//catch alls? 
const error404 = require('./middleware/404')
app.use(error404);

const internalServerError = require('./middleware/500');
app.use(internalServerError);


//handlers


function getModelType(req, res, next) {
  const modelType = req.params.model;
  console.log('the req.params is ', req.params)
  switch (modelType) {
    case 'categories': 
      req.model = categories;
      next();
      break;
    case 'products': 
      req.model = products;
      next();
      break;
    case 'customers':
      req.model = customers;
      next()
      break;
    case 'orders': 
      req.model = orders;
      next();
      break;
    default:
      throw new Error('Invalid data request / invalid model!')
  }
}


let isRunning = false;
module.exports = {
  server: app,
  start: function(port) {
    if (!isRunning) {
      const PORT = port || process.env.PORT || 3000;
      app.listen(PORT, () => {
        
        console.log(`server is listening on ${PORT}...`)
      })
      isRunning = true;
    } else {
      console.error('Server is already running')
    }
  }
}