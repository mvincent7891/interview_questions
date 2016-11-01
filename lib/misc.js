
// Write a function that will shift the input array to the left
// by a certain number of times.
export const nShiftInPlace = (arr, shift) => {

  let n = arr.length;
  let k = n - (shift % n);
  reverseArray(arr, 0, n);
  reverseArray(arr, 0, k);
  reverseArray(arr, k, n);
};

export const reverseArray = (arr, start, finish) => {
  let n = finish - start;
  let mid = Math.floor(n / 2);
  for (let i = 0; i < mid; i++) {
    let temp = arr[n - i - 1 + start];
    arr[n - i - 1 + start] = arr[i + start];
    arr[i + start] = temp;
  }
};
