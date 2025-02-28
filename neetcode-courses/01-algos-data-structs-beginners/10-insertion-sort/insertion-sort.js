class InsertionSort {
  constructor(arr) {
    for (let i=1; i<arr.length; i++) {
      let j=i-1
      while (j >= 0 && arr[j+1] < arr[j]) {
        let tmp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = tmp
        j--
      }
    }
    return arr
  }
}

console.log(new InsertionSort([1,4,5,3,2]))