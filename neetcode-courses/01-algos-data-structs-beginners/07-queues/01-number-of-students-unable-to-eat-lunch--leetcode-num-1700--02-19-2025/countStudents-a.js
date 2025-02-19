class Node {
  constructor(val, prev = null, next = null) {
    this.val = val
    this.prev = prev
    this.next = next
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue(val) {
    if (this.head == null && this.tail == null) {
      const node = new Node(val)
      this.head = node
      this.tail = node
    } else {
      const node = new Node(val, this.tail)
      this.tail.next = node
      this.tail = node
    }
  }

  dequeue() {
    if (this.head == null && this.tail == null) {
      throw('can\'t dequeue from empty queue')
    } else if (this.head.next == null && this.tail.prev == null) {
      this.head = null
      this.tail = null
      throw('queue is empty now--no value to return')
    } else {
      const node = this.head
      this.head = this.head.next
      node.next = null
      this.head.prev = null
      return node.val
    }
  }

  areAllValsSame() {
    let current = this.head
    const val = current.val
    if (this.head.next == null && this.tail.prev == null) {
      return false
    }
    do {
      current = current.next
      if (current.val != val) {
        return false
      }
    } while (current.next != null)
    return true
  }

  length() {
    let current = this.head
    let size = 1
    while (current.next != null) {
      current = current.next
      size++
    }
    return size
  }

  arrayToQueue(arr) {
    arr.forEach(val => {
      this.enqueue(val)
    })
  }
}

module.exports = { Queue }

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  const queue = new Queue()
  queue.arrayToQueue(students)
  while (sandwiches.length > 0 && !queue.areAllValsSame()) {
    if (queue.head.val == sandwiches[0]) {
      if (queue.head.next == null && queue.tail.prev == null) {
        return 0
      }
      queue.dequeue()
      sandwiches.shift()
    } else {
      const student = queue.dequeue()
      queue.enqueue(student)
    }
  }
  return queue.length()
};

console.log('countStudents([1,1,0,0], [0,1,0,1]): ' + countStudents([1,1,0,0], [0,1,0,1])) // 0
console.log('countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]): ' + countStudents([1,1,1,0,0,1], [1,0,0,0,1,1])) // 3