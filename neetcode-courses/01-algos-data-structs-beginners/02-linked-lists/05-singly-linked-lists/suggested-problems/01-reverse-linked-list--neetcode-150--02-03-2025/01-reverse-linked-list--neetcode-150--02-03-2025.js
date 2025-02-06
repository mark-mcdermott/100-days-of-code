const { ListNode, LinkedList } = require('./../../write-the-data-structure-problem/LinkedList.js')

class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    let reversedNodes = []
    head.map(node => { reversedNodes.push(node) })
    let newHead = reversedNodes.slice(reversedNodes.length - 1)
    return head
  }
}

let list = new LinkedList(0)
list.insertTail(1)
list.insertTail(2)
list.insertTail(3)
list.insertHead(4)
console.log(`initial list: ${list.getValues()}`)


// let solution = new Solution(list)
// // console.log(`reversed list: ${solution.reverseList(list.getValues())}`)
// console.log(`reversed list: ${solution.reverseList(head)}`)