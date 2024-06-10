const {
  getComments,
  getHtml,
  getText,
  handleNotFound,
  postComment,
  getHome,
} = require('./handlers.js')

const http = require('http')

const PORT = 5000

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    return getHome(req, res)
  }
  if (req.method === 'GET' && req.url === '/html') {
    return getHtml(req, res)
  }

  if (req.method === 'GET' && req.url === '/text') {
    return getText(req, res)
  }

  if (req.method === 'GET' && req.url === '/comments') {
    return getComments(req, res)
  } // we are adding return cause we don't want to do the code again

  if (req.method === 'POST' && req.url === '/comments') {
    return postComment(req, res)
  }

  handleNotFound(req, res)
})

server.listen(PORT, () => {
  console.log(`server was launched on port ${PORT}`)
})
