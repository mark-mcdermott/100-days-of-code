class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  constructor() {
    this.cnt = 0
  }
  
  reverseList(head) {
    if (head.next != null && this.cnt < 2) {
      // console.log()
      // this.printList(head)
      console.log()
      console.log(head.next)
      const next = head.next
      // console.log(next)
      // console.log(`next.next: ${this.printList(next)}`)
      head.next.next = head
      head.next = null
      this.cnt++
      this.reverseList(next)
    } else {
      return head
    } 
  }

  toString() {
    return `val: ${this.val}, next: {this.next.val}`
  }

  debugString() {
    return `val: ${this}`
  }

  printList(head) {
    let str = '['
    let node = head
    let cnt = 0
    do {
      if (cnt != 0) {
        str += ','
      }
      str += '('
      str += node.val
      if (node.next) {
        str += ','
        str += node.next.val
      }
      str += ')'
      node = node.next
      cnt++
    } while (node != null)
    str += ']'
    console.log(str)
  }
}

const three = new ListNode(3)
const two = new ListNode(2)
two.next = three
const one = new ListNode(1)
one.next = two
const head = new ListNode(0)
head.next = one

solution = new Solution()
const newHead = solution.reverseList(head)
// console.log(newHead)

// let node = newHead
// do {
//   console.log(node)
//   node = node.next
// } while (node.next != null)
