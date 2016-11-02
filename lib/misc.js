// MISCELLANEOUS PROBLEMS

// 1. Shift an Array in Place in O(n) time and O(1) Extra Space

// Hint: You may need the method below to reverse an array in place.

// 1.1 #reverseArray
export const reverseArray = (arr, start, finish) => {
  let n = finish - start;
  let mid = Math.floor(n / 2);
  for (let i = 0; i < mid; i++) {
    let temp = arr[n - i - 1 + start];
    arr[n - i - 1 + start] = arr[i + start];
    arr[i + start] = temp;
  }
};

// 1.2 #nShiftInPlace
export const nShiftInPlace = (arr, shift) => {
  let n = arr.length;
  let k = n - (shift % n);
  reverseArray(arr, 0, n);
  reverseArray(arr, 0, k);
  reverseArray(arr, k, n);
};
