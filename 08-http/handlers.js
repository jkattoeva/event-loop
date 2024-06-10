const fs = require('fs')
const qs = require('querystring')
const comments = require('./data')

function getHome(req, res) {
  fs.readFile('./files/comment_form.html', (err, data) => {
    if (err) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/plain')
      res.end('server error while loading HTML file')
    } else {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    }
  })
}

function getHtml(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.write('<html><body><div>')
  res.write('<h1>greetings from the http server!</h1>')
  res.write('</div></body></html>')
  res.end()
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

function postComment(req, res) {
  res.setHeader('Content-Type', 'text/plain')

  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk.toString()
    })

    req.on('end', () => {
      try {
        const comment = qs.parse(body)
        comments.push(comment)
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>Comment data was received</h1>')
        res.write('<a href="/">submit one more comment</a>')
        res.end()
      } catch (error) {
        res.statusCode = 400
        res.end('invalid form data')
      }
    })
  } else if (req.headers['content-type'] === 'application/json') {
    let commentJson = ''

    req.on('data', (chunk) => (commentJson += chunk))

    req.on('end', () => {
      try {
        comments.push(JSON.parse(commentJson))
        res.statusCode = 200
        res.end('Comment data was received')
      } catch (error) {
        res.statusCode = 400
        res.end('Invalid JSON')
      }
    })
  } else {
    res.statusCode = 400
    res.end('data must be in the JSON format')
  }
}

function handleNotFound(req, res) {
  res.statusCode = 404
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Page not found</h1>')
}

module.exports = {
  getComments,
  getHtml,
  getText,
  handleNotFound,
  postComment,
  getHome,
}
