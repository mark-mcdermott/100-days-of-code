/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  let circles = 0
  let squares = 0
  for (let student of students) {
    if (student == 0) {
      circles++
    } else {
      squares++
    }
  }

  for (let sandwich of sandwiches) {
    if (circles === 0 && sandwich === 0) {
      return squares
    } else if (squares === 0 && sandwich === 1) {
      return circles
    } else {
      if (sandwich === 0) {
        circles--
      } else {
        squares--
      }
    }
  }
  return 0
};

console.log('countStudents([1,1,0,0], [0,1,0,1]): ' + countStudents([1,1,0,0], [0,1,0,1])) // 0
console.log('countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]): ' + countStudents([1,1,1,0,0,1], [1,0,0,0,1,1])) // 3