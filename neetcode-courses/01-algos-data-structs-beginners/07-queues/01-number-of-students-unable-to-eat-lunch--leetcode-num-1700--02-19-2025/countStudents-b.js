class Queue {
  constructor() {
    this.items = [];
  }
  
  push(val) {
    this.items.push(val);
  }
  
  pop() {
    return this.items.shift();
  }
  
  front() {
    return this.items.length > 0 ? this.items[0] : null;
  }
}

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  // TODO
};

console.log('countStudents([1,1,0,0], [0,1,0,1]): ' + countStudents([1,1,0,0], [0,1,0,1])) // 0
console.log('countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]): ' + countStudents([1,1,1,0,0,1], [1,0,0,0,1,1])) // 3