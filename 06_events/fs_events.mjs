import { EventEmitter } from 'events'
import fs from 'fs'
const fileEmitter = new EventEmitter()

fileEmitter.on('writeComplete', () => {
  console.log('file first txt was written')
  fs.appendFile('./first.txt', '\none more line', () => {
    fileEmitter.emit('fileAppended')
  })
})

fileEmitter.on('fileAppended', () => {
  console.log('appended new text to the first txt file')
  fs.rename('./first.txt', './renamed.txt', () => {
    fileEmitter.emit('fileRenamed')
  })
})

fileEmitter.on('fileRenamed', () => {
  console.log('the file was successfully renamed') 
})

fs.writeFile('./first.txt', 'first txt text', () => {
  fileEmitter.emit('writeComplete')
})
