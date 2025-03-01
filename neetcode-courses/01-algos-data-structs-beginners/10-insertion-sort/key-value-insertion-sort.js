/**
 * Pair class to store key-value pairs
 */
class Pair {
    /**
     * @param {number} key The key to be stored in the pair
     * @param {string} value The value to be stored in the pair
     */
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class Solution {
  /**
   * @param {Pair[]} pairs
   * @returns {Pair[][]}
   */
  insertionSort(pairs) {
      let res = []
      for (let i=0; i<pairs.length; i++) {
          let j=i-1
          while (j>=0 && pairs[j]['key']>pairs[j+1]['key']) {
              let temp = pairs[j+1]
              pairs[j+1]=pairs[j]
              pairs[j] = temp
              j--
          }
          res.push(pairs.slice())
      }
      return res
  }
}

let pairs1 = [new Pair(5, "apple"), new Pair(2, "banana"), new Pair(9, "cherry")]
let pairs2 = [new Pair(3, "cat"), new Pair(3, "bird"), new Pair(2, "dog")]

const solution = new Solution
console.log(solution.insertionSort(pairs1))
console.log(solution.insertionSort(pairs2))
// [
//   '[(5,apple),(2,banana),(9,cherry)]',
//   '[(2,banana),(5,apple),(9,cherry)]',
//   '[(2,banana),(5,apple),(9,cherry)]'
// ]
// [
//   '[(3,cat),(3,bird),(2,dog)]',
//   '[(3,cat),(3,bird),(2,dog)]',
//   '[(2,dog),(3,cat),(3,bird)]'
// ]