
function handleGet(req, res, next) {
  const query = req.params.id ? req.params.id : '';
  req.model.read(query)
    .then(results => {
      res.status(200).json(results);
    })
    .catch(console.log);
}



function handlePost(req, res, next) {
  if (!req.body) throw new Error('No Body Baby')
  req.model.create(req.body)
    .then(results => {
      res.status(201).json(results);
    })
}



function handlePut(req, res, next) {
  if (!req.params.id || !req.body) throw new Error('No ID or no BODY supplied.')
  req.model.update(req.params.id, req.body)
    .then(results => {
      res.status(202).json(results);
    })

}

function handleDelete(req, res, next) {
  if (!req.params.id) throw new Error('Need an ID param, you person of people you')
  req.model.delete(req.params.id)
    .then(results => {
      res.status(200).json(results);
    })
}


module.exports = {
  handleGet, handlePost, handlePut, handleDelete
}