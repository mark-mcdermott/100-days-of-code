import { describe, it, expect } from 'vitest'
import { DoublyLinkedList } from "./DoublyLinkedList"

describe('doubly linked list', () => {
  it('has correct values', () => {
    let list = new DoublyLinkedList
    list.addAtHead(1)
    list.addAtTail(3)
    list.addAtIndex(1,2)
    expect(list.get(1)).toEqual(2)
    list.deleteAtIndex(1)
    expect(list.get(1)).toEqual(3)
  })
})