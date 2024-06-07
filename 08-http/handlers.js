const comments = require('./data')

function getHtml(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.write('<html><body><div>')
  res.write('<h1>greetings from the http server!</h1>')
  res.write('</div></body></html>')
  return res.end()
}

function getText(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('this is plain text')
}

function getComments(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(comments))
}

function handleNotFound(req, res) {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Page not found</h1>')
}

module.exports = { getComments, getHtml, getText, handleNotFound }
