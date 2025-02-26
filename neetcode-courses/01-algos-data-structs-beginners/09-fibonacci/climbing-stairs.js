class Solution {
  /**
   * @param {number} n
   * @return {number}
   */
  climbStairs(n) {
    if (n <= 3) {
      return n
    } else {
      return this.climbStairs(n - 1) + this.climbStairs(n - 2)
    }
  }
}

// const solution = new Solution()
// console.log(solution.climbStairs(1))
// console.log(solution.climbStairs(2))
// console.log(solution.climbStairs(3))
// console.log(solution.climbStairs(4))
// console.log(solution.climbStairs(5))
// console.log(solution.climbStairs(6))
// console.log(solution.climbStairs(7))
// console.log(solution.climbStairs(8))
// console.log(solution.climbStairs(9))
// console.log(solution.climbStairs(27))
// console.log(solution.climbStairs(28))
// console.log(solution.climbStairs(29))
// console.log(solution.climbStairs(30))
