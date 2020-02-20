const express = require('express');
const morgan = require('morgan')
const app = express();


app.use(express.json());
const router = require('./api/router');
app.use(router);
app.use(morgan);

app.get('/badRoute', (req, res, next) => {
  throw new Error('You want errors? You get errors. Happy?!')
})

//catch alls? 
const error404 = require('./middleware/404')
app.use(error404);

const internalServerError = require('./middleware/500');
app.use(internalServerError);



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