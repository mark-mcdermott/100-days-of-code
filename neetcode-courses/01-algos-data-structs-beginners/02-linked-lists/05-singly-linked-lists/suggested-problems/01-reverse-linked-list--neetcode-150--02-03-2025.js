const { ListNode, LinkedList } = require('../write-the-data-structure-problem/LinkedList.js')

class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    let reversedNodes = []
    head.map(node => { reversedNodes.push(node) })
    console.log(reversedNodes)
    // let newHead = reversedNodes.slice(reversedNodes.length - 1)
  }
}

let list = new LinkedList()
list.insertHead(0)
list.insertTail(1)
list.insertTail(2)
list.insertTail(3)

let solution = new Solution(list)
console.log(solution.reverseList(list.getValues()))