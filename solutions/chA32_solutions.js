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
// limit the complexity of the requisite computations.

// 32.2.1
// One of the utilities we will need is a function to compute a number
// from a string of digits. In practice, these digits would represent
// the index of a character from a given alphabet.
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
// is '7', we need a method to calculate 247 in constant time. To save
// time, we would typically precompute a table of powers of 10.
const pows10 = {
  0: 0, 1: 10, 2: 100, 3: 1000, 4: 10000, 5: 100000, 6: 1000000,
  7: 10000000, 8: 1000000000
};

export const nextNum = (current, next) => {
  if (!current) { return next; } // Handles case when current is zero
  let m = Math.floor(Math.log10(current));
  return 10 * (current % (pows10[m])) + next;
};

// 32.2.3
// Finally, given a pattern and some text, return an array of matching
// start indices. First, use #fromString to compute the pattern and first
// test case (integer equivalents). Then, scan the entire text,
// updating the test case using #nextNumn, and saving results.
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
// return the length of the longest prefix of the pattern that is a
// suffix of some text. For instance, given pattern 'abac', and text
// 'aabbabab', this function should return 2, because the longest prefix
// of 'abac' that is a suffix of the text is 'ab' (length 2).

export const longestPrefix = (pattern, text) => {
  // TODO: Fix runtime of this function; these were quick fixes.
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
// (s) ranging from 0 to m-1, where m is the length of the pattern.
// Each state k should point to another object, with a key (c) for each
// character in the alphabet, each pointing to a next state, n. To be
// clear, this object describes the next state, n, given some current
// state, s, and some new character, c. See tests for precise examples.
// Hint: you will need #longestPrefix.

export const buildStateMap = (alphabet, pattern) => {
  // TODO: Fix runtime of this function; these were quick fixes.
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

// KMP is similar to the finite automaton; however, the algorithm saves
// in preprocessing time by limiting preprocessing using information
// contained in the pattern itself.

// 32.4.1
// Again, we will need a utility function that determines our state.
// This function will match each state (number of matched characters)
// to the longest prefix of the pattern that is a suffix of the current
// state.

// Hint: Use #longestPrefix from above.
export const buildKMPMap = (pattern) => {
  // TODO: Fix runtime of this function; these were quick fixes.
  let map = {1: 0};
  let m = pattern.length;
  for (let q = 2; q <= m; q++) {
    let matched = pattern.slice(0, q);
    let theRest = pattern.slice(1, q);
    map[q] = longestPrefix(matched, theRest);
  }
  return map;
};

// 32.4.2
// Finally, build a KMP matcher, similar to the finite automaton matcher
// above. NB: Take care that each time you change state due to a mismach,
// you must check if the character that caused you to decrement state
// is now a match.
export const knuthMorrisPratt = (pattern, text) => {
  let results = [];
  let n = text.length;
  let m = pattern.length;
  let map = buildKMPMap(pattern);
  let q = 0;
  for (let i = 1; i <= n; i++) {
    // Keep decrementing q until q === 0 or we have a match
    // NB: Take time to understand this while loop
    while (q > 0 && pattern[q] !== text[i - 1]) {
      q = map[q];
    }
    // The current characters match, so increment state
    if (pattern[q] === text[i - 1]) {
      q += 1;
    }
    // There's a match at (i - m)
    if (q === m) {
      results.push(i - m);
      q = map[q];
    }
  }
  return results;
};
