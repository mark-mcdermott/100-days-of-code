class MergeSort {

  mergeSort(arr,s=0,e=arr.length-1) {
    if (s>=e) return arr
    const m = Math.floor((s + e) / 2)
    this.mergeSort(arr,s,m)
    this.mergeSort(arr,m+1,e)
    this.merge(arr,s,m,e)
    return arr
  }

  merge(arr,s,m,e) {
    let L = arr.slice(s,m+1)
    let R = arr.slice(m+1,e+1)
    let i=0, j=0, k=s
    
    while (i<L.length && j<R.length) {
      if (L[i] <= R[j]) {
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

let ms = new MergeSort
console.log(ms.mergeSort([4,1,2,7,3,9])) // [ 1, 2, 3, 4, 7, 9 ]

exports.default = { MergeSort }