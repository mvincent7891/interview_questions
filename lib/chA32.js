// Problems in this skeleton are sourced from Introduction to Algorithms,
// Chapter 32: String Matching

// With a pattern of length m, text of length n, and alphabet of
// length E, we have the following:
//  _________________________________________________________________
// | ALGORITHM           | PRE-PROCESSING TIME   |   MATCHING TIME   |
// |---------------------|-----------------------|-------------------|
// | Naive               |    None               |  O((n - m + 1)m)  |
// | Rabin-Karp          |    O(m)               |  O((n - m + 1)m)  |
// | Finite automaton    |    O(mE)              |  O(n)             |
// | Knuth-Morris-Pratt  |    O(m)               |  O(n)             |
// |_________________________________________________________________|

// ----------------------------- //
// 32.1 NAIVE MATCHING           //
// ----------------------------- //
// At each character in the text (length n), check
// if there is a match for the pattern (length m). Return an array of
// starting indices of matches.

export const naiveMatch = (pattern, text) => {
  let m = pattern.length;
  let n = text.length;
  let results = [];
  for (let i = 0; i < (n - m); i++) {
    if (text.slice(i, i + m) === pattern) {
      results.push(i);
    }
  }
  return results;
};

// ----------------------------- //
// 32.2 RABIN-KARP MATCHING:     //
// ----------------------------- //

// For simplicity's sake, we will restrict test cases to strings made up
// of digits, e.g. text = '3245357', pattern = '453' should return [2].
// Additionally, we will assume patterns are sufficiently small such that
// arithmetic operations on the pattern may be done in constant time.
// In practice Rabin-Karp would be implemented using mod arithmetic to
// limit the complexity of the requisite computation.

// 32.2.1
// One of the utilities we will need is a function to compute a number
// from a string of digits. In practice, these digits would represent
// a the index of a character from a given alphabet.
export const fromString = string => {
  if (string.length === 1) { return parseInt(string); }
  let m = string.length;
  let last = parseInt(string[m - 1]);
  return last + 10 * fromString(string.slice(0,m - 1));
};

// 32.2.2
// The next utility we need is a function to compute the next number
// from the current as we slide our window of focus along the text.
// For instance, if the current number is 324, and the next character
// is '7', we need a method to calculate 247 in O(1) running time. To save
// time, we would typically precompute a table of powers of 10.
const pows10 = {
  0: 0, 1: 10, 2: 100, 3: 1000, 4: 10000, 5: 100000, 6: 1000000,
  7: 10000000, 8: 1000000000
};

export const nextNum = (current, next) => {
  if (!current) {
  	return next;
  }
  let m = Math.floor(Math.log10(current));
  return 10 * (current % (pows10[m])) + next;
};

// 32.2.3
// Finally, given a pattern and some text, return an array of matching
// start indices. First, use #fromString to compute the pattern and first
// test case (integer equivalents). Then, scan the entire text,
// updating the test case using #nextNum.
export const rabinKarp = (pattern, text) => {
  let m = pattern.length;
  let n = text.length;
  let results = [];
  let patternInt = fromString(pattern);
  let testCaseInt = fromString(text.slice(0, m));
  if (patternInt === testCaseInt) { results.push(0); }
  for (let i = m; i < n; i++) {
    let next = parseInt(text[i]);
    testCaseInt = nextNum(testCaseInt, next);
    if (patternInt === testCaseInt) { results.push(i - m + 1); }
  }
  return results;
};

// --------------------------------- //
// 32.3 FINITE AUTOMATON MATCHING:   //
// --------------------------------- //

// 32.3.1
// One necessary step in producing a finite automaton is being able to
// return the length of the largest prefix of the pattern that is a
// suffix of the text. For instance, given pattern 'abac', and text
// 'aabbabab', this function should return 2, because the longest prefix
// of 'abac' that is a suffix of the text is 'ab' (length 2).
export const longestPrefix = (pattern, text) => {
  let len = Math.min(pattern.length, text.length);
  for (let i = len; i; i--) {
    let textLen = text.length;
    let suffix = text.slice(textLen - i);
    let prefix = pattern.slice(0, i);
    if (suffix === prefix) {
      return i;
    }
  }
  return 0;
};

// 32.3.2
// The next step is to be able to generate a state map for a given
// pattern and alphabet. The state map should be an object, with keys
// (states) ranging from 0 to m-1, where m is the length of the pattern.
// Each state should point to another object, with a key for each character
// in the alphabet pointing to the next state.
// Hint: you will need #longestPrefix.
export const buildStateMap = (alphabet, pattern) => {
  let stateMap = {};
  for (let i = 0; i < pattern.length; i++) {
    stateMap[i] = {};
  }
  for (let i = 0; i < pattern.length; i++) {
    let current = pattern.slice(0,i);
    for (let char of alphabet) {
      let text = `${current}${char}`;
      let nextState = longestPrefix(pattern, text);
      stateMap[i][char] = nextState;
    }
  }
  return stateMap;
};

// 32.3.3
// Finally, write #finiteAutomaton which accepts a pattern, text,
// alphabet, and callback (used in place of #buildStateMap). Excluding
// building the state map, this method should run in O(n) time.
export const finiteAutomaton = (pattern, text, alphabet, callback) => {
  let map = callback(alphabet, pattern);
  let n = text.length;
  let m = pattern.length;
  let state = 0;
  let results = [];
  for (let i = 0; i < n; i++) {
    state = map[state][text[i]];
    if (state === pattern.length) {
      results.push(i - m + 1);
      state = 0;
    }
  }
  return results;
};

// ----------------------------------- //
// 32.4 KNUTH-MORRIS-PRATT MATCHING:   //
// ----------------------------------- //

export const knuthMorrisPratt = (pattern, text) => {

};
