const { log } = require('console');
const fs = require('fs');

const dataToWrite = 'hello node js'

fs.writeFile(
  'hello.txt', dataToWrite, (err) =>{
    if(err){
console.log(err);
  }else {
    console.log('file written');

    fs.appendFile('./hello.txt', '\n one more line' , (err) =>{
      if(err) {console.log(
        err
      )}else {
        log('appended')

        fs.rename('./hello.txt', './renamed.txt', (err)=> {
          if(err) {console.log(err)} else {
            log('renamed')
          }
        })
      };
    })
  }}
)

