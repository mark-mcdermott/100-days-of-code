const { ListNode, SinglyLinkedList, CreateLinkedList } = require('./SinglyLinkedList.js')

class Solution {
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  mergeTwoLists(list1, list2) {
    let curr1 = list1.head
    let curr2 = list2.head
    let i = 0;
    while (curr1 || curr2) {
      const val1 = curr1 ? curr1.val : null
      const val2 = curr2 ? curr2.val : null
      if (i == 0) {
        if (val1 == null && val2 == null) {
          return
        } else if (val1 != null && val2 == null) {
          this.merged = new SinglyLinkedList(val1)
          curr1 = curr1 ? curr1.next : null
        } else if (val1 == null && val2 != null) {
          this.merged = new SinglyLinkedList(val2)
          curr2 = curr2 ? curr2.next : null
        } else if (val1 <= val2) {
          this.merged = new SinglyLinkedList(val1)
          curr1 = curr1.next
        } else {
          this.merged = new SinglyLinkedList(val2)
          curr2 = curr2.next
        }
      } else {
        if (!val1) {
          this.merged.insertTail(val2) 
          curr2 = curr2.next
        } else if (!val2) {
          this.merged.insertTail(val1)  
          curr1 = curr1.next
        } else if (val1 < val2) {
          this.merged.insertTail(val1)
          if (curr1.next) {
            curr1 = curr1.next
          } else {
            curr1 = null
          }
        } else {
          this.merged.insertTail(val2)
          if (curr2.next) {
            curr2 = curr2.next
          } else {
            curr2 = null
          }
        }
      }
      i++
    }
    console.log(this.merged.getValues())
  }
}

const getInitialList1 = new CreateLinkedList(1,2,4)
const getInitialList2 = new CreateLinkedList(1,3,5)
const list1 = getInitialList1.list
const list2 = getInitialList2.list

// const getInitialList1 = new CreateLinkedList()
// const getInitialList2 = new CreateLinkedList(1,2)
// const list1 = getInitialList1.list
// const list2 = getInitialList2.list
// list1.removeOnlyNode()

const solution = new Solution
solution.mergeTwoLists(list1, list2)