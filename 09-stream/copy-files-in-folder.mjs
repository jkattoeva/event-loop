import fs from 'fs'
import path from 'path'

const sourceDir = './files'
const destinationDir = './copied-files'

if (!fs.existsSync(sourceDir)) {
  console.warn(`Source dir ${sourceDir} doesn't exist`)
  console.log('Exiting...')
  process.exit(0)
}
if (fs.existsSync(destinationDir)) {
  fs.rmdirSync(destinationDir)
}

fs.mkdirSync(destinationDir)

fs.readdir(sourceDir, (err, fileNames) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  fileNames.forEach((filename, index) => {
    const sourceFilePath = path.join(sourceDir, filename)
    const destinationFilePath = path.join(
      destinationDir,
      `${index}. ${filename}` // 1.index.html
    )
    const readFileStream = fs.createReadStream(sourceFilePath)
    const writeFileStream = fs.createWriteStream(destinationFilePath)

    readFileStream.pipe(writeFileStream)

    writeFileStream.on('finish', () => {
      console.log(`File ${filename} was copied`)
    })
  })
  console.log(fileNames) // array of file names
})
