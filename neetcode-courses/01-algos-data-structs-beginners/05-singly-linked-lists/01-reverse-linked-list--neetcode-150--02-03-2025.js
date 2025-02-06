const { ListNode, SinglyLinkedList } = require('./SinglyLinkedList.js')

class Solution {
  getTail(head) {
    let curr = head
    while (curr.next != null) {
      curr = curr.next
    }
    return curr
  }

  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    let curr = head
    let next = head.next
    while (next != null) {
      
    }
    // let reversedHead = new SinglyLinkedList(head.)
    // let curr = head
    // do {

    // } while (curr.next != null) {

    // return newHead
  }
}

let list = new SinglyLinkedList(0)
list.insertTail(1)
list.insertTail(2)
list.insertTail(3)
list.insertHead(4)
console.log(`initial list: ${list.getValues()}`)

const solution = new Solution
const reversedList = solution.reverseList(list)

// const reversedArr = reversedList.getValues()
// console.log(`reversed list: ${reversedArr}`)


// let solution = new Solution(list)
// // console.log(`reversed list: ${solution.reverseList(list.getValues())}`)
// console.log(`reversed list: ${solution.reverseList(head)}`)