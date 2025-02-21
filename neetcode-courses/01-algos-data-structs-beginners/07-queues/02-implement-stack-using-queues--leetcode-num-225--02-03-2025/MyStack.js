class Queue {
  constructor() { this.items = [] }
  push(val) { this.items.push(val) }
  pop() { return this.items.shift() }
  front() { return this.items.length > 0 ? this.items[0] : null }
  isEmpty() { return this.items.length === 0 }
}

var MyStack = function() {
    let q1 = new Queue()
    let q2 = new Queue()
    this.q1 = q1
    this.q2 = q2
};

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
    
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    
};

var obj = new MyStack()
console.log(obj)

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */