const { ListNode, SinglyLinkedList } = require('./SinglyLinkedList.js')

class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    let prev = null
    let curr = head

    while (curr) {
      let temp = curr.next
      curr.next = prev
      prev = curr
      curr = temp
    }
    return prev
  }

  getInitialList() {
    let list = new SinglyLinkedList(0)
    list.insertTail(1)
    list.insertTail(2)
    list.insertTail(3)
    list.insertTail(4)
    return list
  }

  getTail(head) {
    let curr = list.head
    while (curr.next) {
      curr = curr.next
    }
    return curr
  }
}

const solution = new Solution
const list = solution.getInitialList()
console.log(`initial list: ${list.getValues()}`)

const reversedList = solution.reverseList(list.head)
list.head = reversedList
list.tail = solution.getTail(list.head)

console.log(`reversed list: ${list.getValues()}`)
console.log(`new head: ${list.head.val}`)
console.log(`new tail: ${list.tail.val}`)