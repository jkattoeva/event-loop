// how to run program : node createfile.js <filename> <linesQty>
import fs from 'fs'
import path from 'path'

console.log(process.argv) // array of arguments

if (!process.argv[2] || !process.argv[3]) {
  console.log('filename and lines qty must be supplied as arguments')
  process.exit(0)
}
console.log('continue...')

const fileName = process.argv[2]
const linesQty = +process.argv[3] // converted to number

if (isNaN(linesQty)) {
  console.log('Lines qty must be a number')
}

const writeStream = fs.createWriteStream(path.join('./files', fileName))

console.log('start', performance.now())
for (let i = 1; i <= linesQty; i++) {
  writeStream.write(
    `This is a line number ${i} in the automatically generated file\n`
  )
}

writeStream.end(() => {
  console.log(
    `Automaticcaly generated file ${fileName} was created successfully`
  )
})

console.log('end', performance.now())
setTimeout(() => {
  console.log('timeout', performance.now())
}, 0)
