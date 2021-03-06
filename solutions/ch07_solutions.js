// 7.1 Write a method that turns an int into a string, and another
// that turns a string into an int. ints will be below 100.

export const intToString = num => {

  let tens = Math.floor(num / 10);
  if (tens < 2) {
    return lessThan20[num];
  }
  let ones = Math.floor(num % 10);
  return `${tensPlace[tens]}-${lessThan20[ones]}`;
};

const invert = obj => {
  let newObj = {};
  for (let prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      newObj[obj[prop]] = prop;
    }
  }
  return newObj;
};

const lessThan20 = {
  0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four',
  5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
  10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen',
  14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
  18: 'eighteen', 19: 'nineteen'
};

const tensPlace = {
  2: 'twenty', 3: 'thirty', 4: 'fourty', 5: 'fifty',
  6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'
};

const numLessThan20 = invert(lessThan20);
const numTensPlace = invert(tensPlace);

export const stringToInt = str => {
  let parts = str.split('-');
  if (parts.length === 1) {
    return numLessThan20(str);
  }
  let strInt = (numTensPlace[parts[0]] + numLessThan20[parts[1]]);
  return parseInt(strInt, 10);
};

// 7.2: Accept a stringified integer, and two bases. Convert the string
// from the first base to the second. You may want to write some helper
// methods. The base will be between 2 and 16.

const numToStr = {
  0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7',
  8: '8', 9: '9', 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'
};

const strToNum = invert(numToStr);

const findBase10 = (strNum, b1) => {
  let digits = strNum.split('');
  let base10 = 0;
  let len = digits.length;
  for (let i = 0; i < len; i++) {
    base10 += Math.pow(b1, i) * parseInt(strToNum[digits[len - i -1]], 10);
  }
  return base10;
};

export const baseConverter = (strNum, b1, b2) => {
  let current = findBase10(strNum, b1);
  let result = [];
  while (current > 0 ) {
    result.unshift(numToStr[current % b2]);
    current = Math.floor(current / b2);
  }
  return result.join('');
};

// 7.4: Accept an array of characters. Replace every 'a' with 2 'd's,
// and remove every 'b'.

export const replaceAndRemove = chars => {
  let len = chars.length;
  let i = 0;
  while (i < len) {
    let char = chars[i];
    if (char === 'a') {
      chars = chars.slice(0, i).concat(['d', 'd']).concat(chars.slice(i + 1));
      i += 2;
      len += 1;
    } else if (char === 'b') {
      chars = chars.slice(0, i).concat(chars.slice(i + 1));
      len -= 1;
    } else {
      i += 1;
    }
  }
  return chars;
};
