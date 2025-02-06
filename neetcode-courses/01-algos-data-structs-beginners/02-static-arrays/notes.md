# Static Arrays

| Operation          | Big-O Time |
| ------------------ | ---------- |
| r/w i-th element   | O(1)       |
| insert/remove end* | O(1)       |
| insert middle      | O(n)       |
| remove middle      | O(n)       |

**assuming there is an empty space to insert to / an element at the end to remove*

## Reading From An Array
Reading from arrays is always O(1) (so instant / "constant time")

## Writing To An Array
- Writing (note this is different than insertion) to arrays is always O(1)

## Inserting Into A Static Array
- Insertion into a static array is O(n)
  - in worst case, every element must be shifted prior to insertion, so n operations
- Static arrays are fixed size
- biggest limitation of static arrays is that you can't always add to the end of it (because that memory may already be in use)

## Removing From Static Array
- Removing from static array is also O(n) because in worst case all elements must be shifted 
*Dynamic Arrays Are Default in JS/Python*