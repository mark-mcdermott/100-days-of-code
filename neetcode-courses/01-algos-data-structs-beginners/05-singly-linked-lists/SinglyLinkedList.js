class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

class CreateLinkedList {
  constructor(...args) {
    this.list = new SinglyLinkedList(args[0])
    for (let i = 1; i < args.length; i++) {
      this.list.insertTail(args[i])
    }
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = new ListNode(val)
    this.tail = this.head
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    let curr = this.head
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

  removeOnlyNode() {
    this.head = null
    this.tail = null
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

// const list = new SinglyLinkedList
// // example 1
// list.insertHead(1)
// list.insertTail(2)
// list.insertHead(0)
// list.remove(1)
// console.log(list.getValues())
// // example 2
// list.insertHead(1)
// list.insertHead(2)
// list.get(5)
// console.log(list.getValues())

module.exports = { ListNode, SinglyLinkedList, CreateLinkedList }