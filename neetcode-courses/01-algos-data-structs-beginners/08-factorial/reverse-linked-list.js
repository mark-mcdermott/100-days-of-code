class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  
  reverseList(head) {
    let curr = head
    if (!curr) {
      return head
    }
    let next = curr.next
    if (!next) {
      return head
    }
    const newHead = this.reverseList(next)
    next.next = curr
    curr.next = null
    return newHead
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
solution.printList(newHead)
console.log(newHead)

