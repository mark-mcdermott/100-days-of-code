const MinStack = require('./MinStack.js')

const minStack = new MinStack()
minStack.push(1);
minStack.push(2);
minStack.push(0);
console.log(minStack.getMin()) // return 0
minStack.pop();
console.log(minStack.top())    // return 2
console.log(minStack.getMin()) // return 1