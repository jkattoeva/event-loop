const path = require('path')

const filePath = '/users/janetta/Desktop/node/index.js'
const textPath = 'D:\\users/janetta/Desktop/file.txt'
const relativePath = './node/movie.mov'
const directoryPath = './node/folder'

console.log(path.isAbsolute(filePath)) //true
console.log(path.isAbsolute(textPath)) // true
console.log(path.isAbsolute(relativePath)) // false

console.log(path.basename(relativePath)) // movie.mov
console.log(path.basename(directoryPath)) //folder

console.log(path.dirname(filePath)) ///users/janetta/Desktop/node
console.log(path.dirname(directoryPath)) // ./node



