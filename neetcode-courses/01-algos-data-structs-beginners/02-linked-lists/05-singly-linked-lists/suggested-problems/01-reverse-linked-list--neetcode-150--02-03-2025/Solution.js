const { LinkedList } = require('./../../write-the-data-structure-problem/LinkedList.js')
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */


/**
   * @param {ListNode} head
   * @return {ListNode}
   */
class Solution {
  constructor() {
    this.list = new LinkedList(1)
    list.insertHead(2)
    list.insertHead(3)
    console.log(list.getValues())
  }
  

  reverseList(head) {
    console.log('hi')
  }
}

solution = new Solution()
solution.reverseList()


