const { ListNode, SinglyLinkedList, CreateLinkedList } = require('./SinglyLinkedList.js')

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

  getTail(head) {
    let curr = head
    while (curr.next) {
      curr = curr.next
    }
    return curr
  }
}

const solution = new Solution
const getInitialList = new CreateLinkedList(1,2,3,4)

const list = getInitialList.list
console.log(`initial list: ${list.getValues()}`)

const reversedList = solution.reverseList(list.head)
list.head = reversedList
list.tail = solution.getTail(list.head)

console.log(`reversed list: ${list.getValues()}`)
console.log(`new head: ${list.head.val}`)
console.log(`new tail: ${list.tail.val}`)