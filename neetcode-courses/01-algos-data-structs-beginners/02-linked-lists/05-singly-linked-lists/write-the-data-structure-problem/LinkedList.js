class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor(val) {
    this.head = new ListNode(val)
    this.tail = this.head
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let curr = this.head.next
    let i = 0
    while (curr) {
      if (i === index) {
        return curr.val
      }
      i++
      curr = curr.next
    }
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    const newNode = new ListNode(val)
    newNode.next = this.head
    this.head = newNode
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    this.tail.next = new ListNode(val)
    this.tail = this.tail.next;
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    let curr = this.head
    if (index == 0) {
      if (curr.next == null)
        return false
      else {
        this.head = curr.next
        curr.next = null
      }
    }
    if (index >= this.getValues().length) {
      return false
    }

    for (let i = 0; i < index; i++) {
      if (i == index - 1) {
        let deletedNode = curr.next
        if (curr.next.next) {
          curr.next = curr.next.next
        } else {
          curr.next = null
          this.tail = curr
        }
        deletedNode.next = null
        return true
      } else {
        curr = curr.next
      }
    }
  }


  /**
   * @return {number[]}
   */
  getValues() {
    let curr = this.head
    const res = []
    while (curr) {
      res.push(curr.val)
      curr = curr.next
    }
    return res
  }
}

module.exports = { ListNode, LinkedList }