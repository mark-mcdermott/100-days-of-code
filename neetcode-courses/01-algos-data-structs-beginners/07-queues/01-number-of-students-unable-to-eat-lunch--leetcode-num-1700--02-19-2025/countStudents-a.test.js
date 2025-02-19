import { Queue } from './countStudents-a.js'
import { describe, it, expect } from 'vitest'

describe('Queue', () => {
  it('enqueue vals are correct', () => {
    const queue = new Queue
    queue.enqueue(1)
    expect(queue.head.val).toBe(1)
    expect(queue.tail.val).toBe(1)
    queue.enqueue(2)
    expect(queue.head.val).toBe(1)
    expect(queue.tail.val).toBe(2)
    queue.enqueue(3)
    expect(queue.head.val).toBe(1)
    expect(queue.tail.val).toBe(3)
    queue.dequeue()
    queue.enqueue(4)
    expect(queue.head.val).toBe(2)
    expect(queue.tail.val).toBe(4)
  })

  it('enqueue prev/next for two nodes are correct', () => {
    const queue = new Queue
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.head.val).toBe(1)
    expect(queue.head.prev).toBe(null)
    expect(queue.head.next.val).toBe(2)
    expect(queue.tail.prev.val).toBe(1)
    expect(queue.tail.val).toBe(2)
    expect(queue.tail.next).toBe(null)
  })

  it('enqueue prev/next for one node is correct', () => {
    const queue = new Queue
    queue.enqueue(1)
    expect(queue.head.val).toBe(1)
    expect(queue.tail.val).toBe(1)
    expect(queue.head.next).toBe(null)
    expect(queue.tail.prev).toBe(null)
  })

  it('dequeue happy path works correctly', () => {
    const queue = new Queue
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.dequeue()).toBe(1)
    expect(queue.head.val).toBe(2)
    expect(queue.tail.val).toBe(3)
    queue.enqueue(4)
    expect(queue.dequeue()).toBe(2)
    expect(queue.head.val).toBe(3)
    expect(queue.tail.val).toBe(4)
  })

  it('dequeue on empty queue throws error', () => {
    const queue = new Queue
    expect(() => queue.dequeue()).toThrowError('can\'t dequeue from empty queue')
  })

  it('dequeue on single node queue throws error', () => {
    const queue = new Queue
    queue.enqueue(1)
    expect(() => queue.dequeue()).toThrowError('queue is empty now--no value to return')

  })

  it('arrayToQueue works correctly', () => {
    const queue = new Queue
    queue.arrayToQueue([1,1,0,0])
    expect(queue.head.val).toBe(1)
    expect(queue.head.next.val).toBe(1)
    expect(queue.head.next.next.val).toBe(0)
    expect(queue.tail.val).toBe(0)
  })

  it('areAllValsSame returns false for [1,2]', () => {
    const queue = new Queue
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.areAllValsSame()).toBe(false)
  })

  it('areAllValsSame returns true for [2,2]', () => {
    const queue = new Queue
    queue.enqueue(2)
    queue.enqueue(2)
    expect(queue.areAllValsSame()).toBe(true)
  })

  it('areAllValsSame returns false for single node queue', () => {
    const queue = new Queue
    queue.enqueue(2)
    expect(queue.areAllValsSame()).toBe(false)
  })
})
