/** Pair class to store key-value pairs */
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
   * @returns {Pair[]}
   */
  mergeSort(pairs) {
    if (pairs.length==0) return []
    else if (pairs.length==1) return pairs
    else return this.recursiveSort(pairs)
  }

  recursiveSort(arr,s=0,e=arr.length-1) {
    if (s>=e) return arr
    const m = Math.floor((s+e)/2)
    this.recursiveSort(arr,s,m)
    this.recursiveSort(arr,m+1,e)
    this.merge(arr,s,m,e)
    return arr
  }

  merge(arr,s,m,e) {
    let L = arr.slice(s,m+1)
    let R = arr.slice(m+1,e+1)
    let i=0, j=0, k=s
    while (i<L.length && j<R.length) {
      if (L[i].key <= R[j].key) {
          arr[k++] = L[i++]
      } else {
          arr[k++] = R[j++]
      }
    }
    while (i < L.length) {
      arr[k++] = L[i++];
    }

    while (j < R.length) {
        arr[k++] = R[j++];
    }
  }
}

let sol = new Solution

let pairs1 = [new Pair(5, "apple"), new Pair(2, "banana"), new Pair(9, "cherry"), new Pair(1, "date"), new Pair(9, "elderberry")]
console.log(sol.mergeSort(pairs1))
// [
//   Pair { key: 1, value: 'date' },
//   Pair { key: 2, value: 'banana' },
//   Pair { key: 5, value: 'apple' },
//   Pair { key: 9, value: 'cherry' },
//   Pair { key: 9, value: 'elderberry' }
// ]

let pairs2 = [new Pair(3, "cat"), new Pair(2, "dog"), new Pair(3, "bird")]
console.log(sol.mergeSort(pairs2))
// [
//   Pair { key: 2, value: 'dog' },
//   Pair { key: 3, value: 'cat' },
//   Pair { key: 3, value: 'bird' }
// ]

let pairs3 = [new Pair(3, "bird"), new Pair(-2, "dog"), new Pair(-1, "cat")]
console.log(sol.mergeSort(pairs3))
// [
//   Pair { key: -2, value: 'dog' },
//   Pair { key: -1, value: 'cat' },
//   Pair { key: 3, value: 'bird' }
// ]