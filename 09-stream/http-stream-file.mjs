import http from 'http'

import fs from 'fs'

const server = http.createServer((req, res) => {
  const filePath = './files/index.html'

  //with streams
  if (req.url === '/' && req.method === 'GET') {
    const readStream = fs.createReadStream(filePath)

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    readStream.pipe(res)
  }

  // without streams   . We read entire file and then send it to the client
  if (req.url === '/no-stream' && req.method === 'GET') {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode === 500
        res.end('error reading file on server')
      } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
      }
    })
  }
})

server.listen(5000, () => {
  console.log('Server is listening at port 5000')
})
