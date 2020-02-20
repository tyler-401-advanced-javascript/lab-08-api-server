module.exports = function error404Handler(req, res, next) {
  res.status(404).json({ error: 'Cant find that resource' })
}