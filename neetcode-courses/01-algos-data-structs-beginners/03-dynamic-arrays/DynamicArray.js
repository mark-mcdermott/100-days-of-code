class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */

  constructor(capacity) {
    this.arr = new Array(capacity)
    this.end = -1
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    return this.arr[i]
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
    this.arr[i] = n
    if (i > this.end) {
      this.end = i
    }
  }

  /**
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
    if (this.end > this.arr.length - 2) {
      this.double()
    }
    this.arr[++this.end] = n
  }
  /**
   * @returns {number}
   */
  popback() {
    const val = this.arr[this.end]
    this.arr[this.end] = null
    this.end--
    return val
  }

  /**
   * @returns {void}
   */
  resize() {
    this.double()
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.end + 1
  }

  /**
   * @returns {number}
   */
  getCapacity() {
    return this.arr.length
  }

  double() {
    let newArr = new Array(2 * this.arr.length)
      for (let i = 0; i < this.arr.length; i++) {
        newArr[i] = this.arr[i]
      }
      this.arr = newArr 
  }
}

// arr = new DynamicArray(3)
// arr.set(0, 1)
// arr.set(1, 2)
// arr.pushback(4)
// arr.pushback(5)
// console.log(arr.popback())
// console.log(arr)

module.exports = DynamicArray