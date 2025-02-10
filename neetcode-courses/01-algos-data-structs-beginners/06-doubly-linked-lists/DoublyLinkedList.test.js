import { describe, it, expect } from 'vitest'
import { DoublyLinkedList } from "./DoublyLinkedList"

describe('constructor', () => {
  it('creates list with no nodes when empty', () => {
    expect((new DoublyLinkedList).toString()).toEqual('[]')
  })
  it('creates correct list with with args', () => {
    expect((new DoublyLinkedList(1,2,3)).toString()).toEqual('[1,2,3]')
  })
})

describe('addAtHead', () => {
  it('adds node to empty list', () => {
    const list = new DoublyLinkedList
    list.addAtHead(1)
    expect(list.toString()).toEqual('[1]')
  })
  it('adds new head to list with two nodes', () => {
    const list = new DoublyLinkedList(1,2,3)
    list.addAtHead(4)
    expect(list.toString()).toEqual('[4,1,2,3]')
  })
})

describe('addAtTail', () => {
  it('adds node to empty list', () => {
    const list = new DoublyLinkedList
    list.addAtTail(1)
    expect(list.toString()).toEqual('[1]')
  })
  it('adds nodes to end of list', () => {
    const list = new DoublyLinkedList(1,2,3)
    list.addAtTail(4)
    expect(list.toString()).toEqual('[1,2,3,4]')
  })
  it('adds correct prev and next links', () => {
    const list = new DoublyLinkedList(1,2)
    const first = list.head
    expect(first.val).toBe(1)
    expect(first.next.val).toBe(2)
  })
})

describe('get', () => {
  it('returns val at index', () => {
    const list = new DoublyLinkedList(1,2)
    expect(list.get(1),2)
  })
  it('returns -1 if index out of bounds', () => {
    const list = new DoublyLinkedList(1,2,3)
    expect(list.get(3),-1)
  })
})

describe('addAtIndex', () => {
  it('adds correct node at head of list', () => {
    const list = new DoublyLinkedList(1,2,3)
    list.addAtIndex(0,4)
    expect(list.toString()).toEqual('[4,1,2,3]')
  })
  it('adds correct node in middle of list', () => {
    const list = new DoublyLinkedList(1,2,3)
    list.addAtIndex(1,4)
    expect(list.toString()).toEqual('[1,4,2,3]')
  })
  it('adds correct node at end of list', () => {
    const list = new DoublyLinkedList(1,2,3)
    list.addAtIndex(3,4)
    expect(list.toString()).toEqual('[1,2,3,4]')
  })
  it('does nothing if index is greater than list length', () => {
    const list = new DoublyLinkedList(1,2,3)
    list.addAtIndex(4,4)
    expect(list.toString()).toEqual('[1,2,3]')
  })
})

describe('deleteAtIndex', () => {
  it('deletes node if index is 0', () => {
    const list = new DoublyLinkedList(1,2,3)
    list.deleteAtIndex(0)
    expect(list.toString()).toEqual('[2,3]')
  })
  it('deletes node if index is in middle', () => {
    const list = new DoublyLinkedList(1,2,3)
    list.deleteAtIndex(1)
    expect(list.toString()).toEqual('[1,3]')
  })
  it('deletes node if index is last', () => {
    const list = new DoublyLinkedList(1,2,3)
    list.deleteAtIndex(2)
    expect(list.toString()).toEqual('[1,2]')
  })
})