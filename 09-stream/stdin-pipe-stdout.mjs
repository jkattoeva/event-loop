import stream, { Transform } from 'stream'
import fs, { futimes } from 'fs'

const upperCaseStream = new Transform({
  transform: function (chunk, encoding, cb) {
    const upperCased = chunk.toString().toUpperCase() // buffer converted to string (buffer is a temporary data storage)
    cb(null, upperCased)
  },
})

const reversedCaseStream = new Transform({
  transform(chunk, encoding, cb) {
    const arrayOfCharse = chunk.toString().split('')
    const lastChar = arrayOfCharse.pop()
    const reversed = arrayOfCharse.reverse().concat(lastChar).join('') // remove the enter 
    cb(null, reversed)
  },
})

process.stdin
  .pipe(upperCaseStream)
  .pipe(reversedCaseStream)
  .pipe(process.stdout)

// //pipe to file
// const filePath = './files/stdin-dump.txt'
// const writeStream = fs.createWriteStream(filePath)
// process.stdin.pipe(writeStream)

// //pipe to stdout

// process.stdin.pipe(process.stdout)
