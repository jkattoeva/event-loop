import { EventEmitter } from 'events'
import { setTimeout } from 'timers'

const myEmitter = new EventEmitter()

const timeoutListenerFn = (seconds) => {
  console.log(`timeout event happened in : ${seconds} seconds`)
}

myEmitter.on('timeout', timeoutListenerFn)

setTimeout(() => myEmitter.emit('timeout', 1), 1000)
setTimeout(() => myEmitter.emit('timeout', 2), 2000)

myEmitter.once('singleEvent', () => {
  console.log('singleEvent occured')
})

setTimeout(() => myEmitter.emit('singleEvent'), 500)
setTimeout(() => myEmitter.emit('singleEvent'), 1000)

setTimeout(() => myEmitter.off('timeout', timeoutListenerFn), 3000)

setTimeout(() => myEmitter.emit('timeout', 4), 4000)
