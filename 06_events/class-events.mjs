import EventEmitter from 'events'

class Post extends EventEmitter {
  constructor(author, title) {
    super()
    this.author = author
    this.title = title
    this.likeQty = 0
    this.on('like', (username) => {
      console.log(`${username} liked post`)
    })
    this.on('error', (error) => {
      console.error(error)
    })
  }
  like(username) {
    if (!username) {
      return this.emit('error', new Error('No username in the like request'))
    }
    this.likeQty += 1
    this.emit('like', username)
  }
}

const myPost = new Post('Janetta', 'my first post')

// console.log(myPost.author)
// console.log(myPost.title)
// console.log(myPost.likeQty)
myPost.like('alice')

setTimeout(() => {
  myPost.like()
}, 1000)

setTimeout(() => {
  myPost.like('shuka')
}, 2000)
// console.log(myPost.likeQty)
