// Problems in this skeleton are sourced from Introduction to Algorithms,
// Chapter 32: String Matching

// With a pattern of length m, text of length n, and alphabet of
// length E, we have the following:
//  _________________________________________________________________
// | ALGORITHM           | PRE-PROCESSING TIME   |   MATCHING TIME   |
// |---------------------|-----------------------|-------------------|
// | Naive               |    None               |  O(n - m + 1)m    |
// | Rabin-Karp          |    O(m)               |  O(n - m + 1)m    |
// | Finite automaton    |    O(mE)              |  O(n)             |
// | Knuth-Morris-Pratt  |    O(m)               |  O(n)             |
// |_________________________________________________________________|

// 32.1 NAIVE MATCHING: at each character in the text (length n), check
// if there is a match for the pattern (length m). Return an array of
// starting indices of matches.

export const naiveMatch = (pattern, text) => {

};

// 32.2 RABIN-KARP MATCHING:

// 1) With pattern P[1..m], let p be the decimal value when each
// character in P is replaced with it's alphabetic index, computed
// with p = P[m] + 10(P[m - 1] + 10(P[m -2] + ... + 10P[1]))
// 2) The first section of the text, t can be calculated similarly
// 3) As the section is moved across the text, each new t can be
// calculated from the previous t in constant time (see Intro to Algos)
// 4) Because each value of p and t may be too large to work with, we
// introduce the use of mod q, where q is some prime number
// 5) The clever bit is how to compute each new t mod q from the
// previous t mod q.
// Return not only the number of matches, but also the number of
// spurious matches (i.e., those that evaluate to the same number after
// mod q)

export const rabinKarp = (pattern, text, q) => {

};

// 32.3 FINITE AUTOMATON MATCHING:

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

// 32.4 KNUTH-MORRIS-PRATT MATCHING:

export const knuthMorrisPratt = (pattern, text) => {

};
