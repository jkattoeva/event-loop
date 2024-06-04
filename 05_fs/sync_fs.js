const fs = require('fs')

const dataToWrite = 'hello node js'
// avoid using sync versions , they block event loop

try {
  fs.writeFileSync('./first.txt', dataToWrite)
  console.log('file first txt was written')
  fs.appendFileSync('./first.txt', '\none more line')
  console.log('appended new text to the first txt file')
  fs.renameSync('./first.txt', './renamed.txt')
  console.log('the file was successfully renamed')
} catch (error) {
  console.log(error)
}
