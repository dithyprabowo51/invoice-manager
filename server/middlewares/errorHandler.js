const errorHandler = (err, req, res, next) => {
  if (err.status === 400) {
    res.status(400).json({ error: err.msg })
  } else if (err.status === 401) {
    res.status(401).json({ error: err.msg })
  } else if (err.name === 'MongoError') {
    res.status(400).json({ error: 'Email has been used' })
  } else if (err.status === 403) {
    res.status(403).json({ error: err.msg })
  } else if (err.status === 404) {
    res.status(404).json({ error: err.msg })
  } else {
    res.status(500).json(err)
  }
}

module.exports = errorHandler