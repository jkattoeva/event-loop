// how to run program : node createfile.js <filename> <linesQty>
console.log(process.argv) // array of arguments

if (!process.argv[2] || !process.argv[3]) {
  console.log('filename and lines qty must be supplied as arguments')
  process.exit(0)
}
console.log('continue...')

const fileName = process.argv[2]
const linesQty = +process.argv[3]

if (isNaN(linesQty)) {
  console.log('Lines qty must be a number')
}
