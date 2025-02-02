# Dynamic Arrays

| Operation          | Big-O Time |
| ------------------ | ---------- |
| r/w i-th element   | O(1)       |
| insert/remove end* | O(1)       |
| insert middle      | O(n)       |
| remove middle      | O(n)       |


## Modern Default
- in Java, ArrayList
- in C++, Vector

## Push/Pop
- push val to end of array
- pop val from end of array
- both are O(1)

## What Happens When We Push To Full Array
- new array space created, double the initial one's size (O(n))
- all old array values copied to new array (O(n))
- new value inserted to end of new array (O(1))
- initial array is deallocated
- createing new array space and copying all vals in is O(2n) = O(n)

## Why Double In Size?
- it's a compromise between:
  - just adding a size of 1 each time (ie, creating a new array each time)
  - allocating a massive amount of empty array space that's hogging RAM

## Amortized Time Complexity
- since we double array size when we fill an array
  - it takes O(n) to add element when we're out of space
  - but being out of space will be pretty infrequent
- ∴ "amortized time complexity is O(1)" 
  - kind of like the average time is O(1)
  - proof involves power series

## Big O For Pushing To Dynamic Array
- to push an arbitrary number of elements to a dynamic array is O(n)
  - actually more like O(2n), but that simplifies to O(n)
- this is similar to time complexity for adding to static array
- so dynamic arrays are efficient data structure as long as we double the size when pushing to a full one