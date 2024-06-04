import { EventEmitter, setMaxListeners } from 'events'

const myEmitter = new EventEmitter()

myEmitter.on('event', () => console.log('first event listener'))
myEmitter.on('event', () => console.log('second event listener'))
myEmitter.on('otherEvent', () => console.log('other event listener'))

myEmitter.setMaxListeners(100)
console.log(myEmitter.getMaxListeners())

console.log(myEmitter.eventNames())

setTimeout(() => {
  myEmitter.emit('event')
}, 1000)
setTimeout(() => {
  myEmitter.emit('otherEvent')
}, 1000)
