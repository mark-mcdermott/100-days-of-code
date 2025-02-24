class Queue1 {
  constructor() { this.items = [] }
  push(val) { this.items.push(val) }
  pop() { return this.items.shift() }
  front() { return this.items.length > 0 ? this.items[0] : null }
  isEmpty() { return this.items.length === 0 }
}

var MyStack = function() {
  this.q1 = new Queue1()
  this.q2 = new Queue1()
}

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  while (this.q1.items.length > 1) {
    this.q2.push(this.q1.pop())
  }
  const poppedValue = this.q1.pop()
  this.q1 = this.q2;
  this.q2 = new Queue1();
  return poppedValue
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  while (this.q1.items.length > 1) {
    this.q2.push(this.q1.pop());
  }
  const topValue = this.q1.pop();
  this.q2.push(topValue);
  this.q1 = this.q2;
  this.q2 = new Queue1();
  return topValue
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.q1.isEmpty()
};

let myStack = new MyStack();
// console.log(myStack)
myStack.push(1)
// console.log(myStack)
myStack.push(2)
// console.log(myStack)
// console.log(myStack.top())
myStack.top()
// console.log(myStack)
console.log(myStack.pop())
console.log(myStack.pop())
// myStack.pop()
// console.log(myStack)
console.log(myStack.empty())

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */