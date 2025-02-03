class MinStack {
  constructor() {
    this.stack = new Array()
    this.minStack = new Array()
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val)
    this.minStack = this.stack.slice().sort((a, b) => b - a)
  }

  /**
   * @return {void}
   */
  pop() {
    const val = this.stack.pop()
    this.minStack = this.stack.slice().sort((a, b) => b - a)
    return val
  }

  /**
   * @return {number}
   */
  top() {
    // console.log(this.stack)
    return this.stack[this.stack.length - 1]
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1]
  }
}

module.exports = MinStack