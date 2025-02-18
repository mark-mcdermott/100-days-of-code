class Node {
  constructor(url, prev = null, next = null) {
    this.url = url
    this.prev = prev
    this.next = next
  }
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.current = new Node(homepage)
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  const newNode = new Node(url, this.current)
  this.current.next = newNode
  this.current = newNode
  return this.current.url
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  while (this.current.prev != null && steps > 0) {
    this.current = this.current.prev
    steps--
  }
  return this.current.url
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  while (this.current.next != null && steps > 0) {
    this.current = this.current.next
    steps--
  }
  const oldNext = this.current.next
  if (oldNext != null) {
    oldNext.prev = null 
  }
  this.current.next = null
  return this.current.url
}

module.exports = { BrowserHistory }