class Node {
  constructor(val, next, prev) {
    this.val = val
    this.next = next
    this.prev = prev
  }
}

class DoublyLinkedList {
  constructor(...args) {
    if (args == null) {
      this.head = null
      this.tail = null
    } else {
      args.forEach((arg) => {
        this.addAtTail(arg)
      })
    }
  }

  addAtHead(val) {
    const node = new Node(val)
    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
  }

  addAtTail(val) {
    const node = new Node(val)
    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
  }

  traverseTo(index) {
    let curr = this.head
    for (let i = 0; i < index; i++) {
      if (curr.next == null) {
        return -1
      } else {
        curr = curr.next
      }
    }
    return curr
  }

  get(index) {
    const node = this.traverseTo(index)
    if (node === -1) {
      return -1
    } else {
      return node.val
    }
  }

  addAtIndex(index,val) {
    const node = new Node(val)
    if (index == 0) {
      node.next = this.head
      this.head.prev = node
      this.head = node
    } else {
      const prev = this.traverseTo(index - 1)
      if (prev == -1) {
        return
      } else if (prev.next != null) {
        const next = prev.next
        node.prev = prev
        prev.next = node
        node.next = next
        next.prev = node
      } else {
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
      }
    }
  }

  deleteAtIndex(index) {
    const node = this.traverseTo(index)
    if (node != -1) {
      const prev = node.prev
      const next = node.next
      if (prev && next) {
        prev.next = next
        next.prev = prev
      } else if (!prev) {
        next.prev = null
        node.next = null
        this.head = next
      } else {
        prev.next = null
        node.prev = null
        this.tail = prev
      }
    }
  }

  toString() {
    let str = '['
    let curr = this.head
    while (curr != null) {
      str += curr.val
      if (curr.next != null) {
        str += ','
      }
      curr = curr.next
    }
    str += ']'
    return str
  }
}

module.exports = { DoublyLinkedList }