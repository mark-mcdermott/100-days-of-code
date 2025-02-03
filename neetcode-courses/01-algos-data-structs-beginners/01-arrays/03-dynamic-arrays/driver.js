const DynamicArray = require('./DynamicArray.js')

arr = new DynamicArray(3)
arr.set(0, 1)
arr.set(1, 2)
arr.pushback(4)
arr.pushback(5)
console.log(arr.popback())
console.log(arr)