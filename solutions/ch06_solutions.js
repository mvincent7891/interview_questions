// Chapter 6 Problems

// 6.1: Accept an array of ints and an index. Return an array with 3
// sections: all the numbers less than the number at the index (pivot),
// all numbers equal to the pivot, and then all the numbers greater
// than the pivot

export const dutchFlag = (array, index) => {
  let pivot = array[index];
  let lessThan = array.filter(element => element < pivot);
  let greaterThan = array.filter(element => element > pivot);
  let equalTo = array.filter(element => element === pivot);
  return lessThan.concat(equalTo).concat(greaterThan);
};

// 6.6: Accept an array of stock prices. Return a pair of days [buy, sell]
// that would yield the greatest return

export const stockPicker = pricesArray => {
  let profit = 0;
  let buy = null;
  let sell = null;
  for (let i = 0; i < pricesArray.length - 1; i++) {
    for (let j = i + 1; j < pricesArray.length; j++) {
      let tempProfit = pricesArray[j] - pricesArray[i];
      if (tempProfit > profit) {
        profit = tempProfit;
        buy = i;
        sell = j;
      }
    }
  }
  return [buy, sell];
};

// 6.11 Accept an array and return a random subset from that array
// of length n

export const randomSubsets = (array, n) => {
  let results = [];

  // While results.length < n, pick a random element from
  // array[results.length..array.length] and shovel it into
  // results. Then switch that element with array[results.length]
  // (move it out of the way).

  while (results.length < n) {
  	let available = array.slice(results.length);
  	let idx = Math.floor(Math.random() * available.length);
  	let temp = available[idx];
  	array[idx + results.length] = array[results.length];
  	array[results.length] = temp;
  	results.push(temp);
  }
  return results;
};

// 6.17: Accept a matrix (2D array) and return a 1-D array with the
// elements in clockwise, spiral order

export const spiralOrdering = (matrix) => {

};
