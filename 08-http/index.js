const http = require('http')

const PORT = 5000

const comments = [
  { id: 100, text: 'first comment', author: 'janetta' },
  { id: 242, text: 'second comment', author: 'sara' },
  { id: 350, text: 'third comment', author: 'joe' },
]

const server = http.createServer((req, res) => {
  if (req.url === '/html') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('<html><body><div>')
    res.write('<h1>greetings from the http server!</h1>')
    res.write('</div></body></html>')
    return res.end()
  }
  if (req.url === '/text') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('this is plain text')
  }
  if (req.url === '/json') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(comments))
  } // we are adding return cause we don't want to do the code again

  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Page not found</h1>')
})

server.listen(PORT, () => {
  console.log(`server was launched on port ${PORT}`)
})
