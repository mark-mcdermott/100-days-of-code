class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */

    isMatch(char1, char2) {
      if (
        (char1 == '(' && char2 == ')') ||
        (char1 == '{' && char2 == '}') ||
        (char1 == '[' && char2 == ']')
      ) return true
      else return false
    }

    isValid(s) {
      if (s.length % 2 != 0) return false
      let stack = [s[0]]
      for (let i = 1; i < s.length; i++) {
        const current = s[i]
        const top = stack[stack.length - 1]
        if (this.isMatch(top, current)) {
          stack.pop()
        } else {
          stack.push(s[i])
        }
      }
      if (stack.length == 0) {
        return true
      } else {
        return false
      }
    }
}

// const s = '({[]})'
// const solution = new Solution()
// console.log(solution.isValid(s))

module.exports = Solution