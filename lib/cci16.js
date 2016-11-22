// Cracking the Coding Interview
// Chapter 16: Intermediate Problems

// Output the indices of the smallest segment of an unsorted array
// which, if sorted, would result in the entire array being sorted.


export const subSort = arr => {

};

// 16.17 Largest Contiguous Sum
// You are given an array of positive and negative numbers.
// Output largest contiguous sum within the array.

export const largestContiguousSum = arr => {
  let max = undefined;
  let tempSum = 0;
  for (let element of arr) {
    tempSum += element;
    if (!max || tempSum > max) max = tempSum;
    if (tempSum < 0) tempSum = 0;
  }
  return max;
};
