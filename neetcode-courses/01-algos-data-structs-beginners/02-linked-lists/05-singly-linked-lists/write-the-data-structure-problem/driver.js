const { LinkedList } = require('./LinkedList.js')

const list = new LinkedList

// example 1
list.insertHead(1)
list.insertTail(2)
list.insertHead(0)
list.remove(1)
console.log(list.getValues())

// example 2
list.insertHead(1)
list.insertHead(2)
list.get(5)
console.log(list.getValues())