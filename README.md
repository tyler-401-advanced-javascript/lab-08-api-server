LAB - Class 10
## Project Name
Create an express server with Mongo DB. It should be a restful API that only works with JSON formatted objects. 



## Author:
Tyler Sayvetz

## Links and Resources
[submission PR] (PR here)

- [Live Deployment](https://tylers-rest-api.herokuapp.com/)



## Setup
Clone the repo.

`npm i`

Install and start Mongo DB Install mongo. With brew if possible.

`brew tap mongodb/brew`

`brew install mongodb-community@4.2`

`brew services start mongo-community`

## Using the program

`node index.js`

sent http requests to routes: 

`GET | POST | PUT | DELETE localhost:<port>/:library/:id`

#### Possible libraries
- orders
- customers
- categories
- products

- GET library with no :id will return all orders
- POST library to be sent with body:
  - `{ key: value }`

### Example requests

- `GET /orders/28792jd830c88` -> returns order with that id

- `GET /orders` -> return all orders

- `POST /categories` body: { name: drinks } -> returns copy of resource created.

- `DELETE /categories/aljsdhf88392` -> returns copy of resource that was deleted.


### tests

run tests with `npm test` . This will create a coverage report that you can access at:

`open coverage/lcov-report/index.html`

### Change Log
- 2/22 - change response for get all :model to include number of documents returned.



UML
UML diagram
