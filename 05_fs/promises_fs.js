
const fs = require('fs/promises');

const dataToWrite = 'hello node js'


fs.writeFile('./first.txt' , dataToWrite)
.then(()=> {console.log('file first txt was written')})
.then(()=> {fs.appendFile('./first.txt', '\none more line')})
.then(()=> console.log('appended new text to the first txt file'))
.then(()=> {fs.rename('./first.txt', './renamed.txt')})
.then(()=> console.log('the file was successfully renamed'))
.catch((err) => console.log(err))


