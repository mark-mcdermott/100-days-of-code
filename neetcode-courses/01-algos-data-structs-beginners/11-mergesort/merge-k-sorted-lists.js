
 // Definition for singly-linked list.
 class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
 }
 
class Solution {
  /**
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {

  }

  merge(list,s,m,e) {
    let listLeftTail = list
    for (let i=0; i<s-1; i++) {
      listLeftTail = listLeftTail.next
    }
    let LHead = list
    for (let i=0; i<s; i++) {
      LHead = LHead.next
    }
    let LLength = 1
    let LTail = LHead
    for (let i=0; i<m; i++) {
      LTail = LTail.next
      LLength++
    }
    let RLength = 1
    let RHead = LTail.next
    let RTail = RHead
    for (let i=m+1; i<e; i++) {
      RTail = RTail.next
      RLength++
    }
    
    let i=0, j=0

    while (i<LLength && j<RLength) {
      if (LHead.val <= RHead.val) {
        listLeftTail.next = LHead
        let next = LHead.next
        listLeftTail = LHead
        LHead = next
        i++
      } else {
        listLeftTail.next = RHead
        let next = RHead.next
        listLeftTail = RHead
        RHead = next
        j++
      }
    }

    while (i<LLength) {
      listLeftTail.next = LHead
      let next = LHead.next
      listLeftTail = LHead
      LHead = next
      i++
    }

    while (j<RLength) {
      listLeftTail.next = RHead
      let next = RHead.next
      listLeftTail = RHead
      RHead = next
      j++
    }

  }
}

let nodeB4 = new ListNode(4)
let nodeB3 = new ListNode(3,nodeB4)
let nodeB2 = new ListNode(2,nodeB3)
let nodeB1 = new ListNode(1,nodeB2)

let nodeA4 = new ListNode(9,nodeB1)
let nodeA3 = new ListNode(7,nodeA4)
let nodeA2 = new ListNode(5,nodeA3)
let nodeA1 = new ListNode(1,nodeA2)

let sol = new Solution
sol.merge(nodeA1,0,3,7)
