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

};

// 32.2.3
// Finally, given a pattern and some text, return an array of matching
// start indices. First, use #fromString to compute the pattern and first
// test case (integer equivalents). Then, scan the entire text,
// updating the test case using #nextNumn, and saving results.
export const rabinKarp = (pattern, text) => {

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

};

// 32.3.3
// Finally, write #finiteAutomaton which accepts a pattern, text,
// alphabet, and callback (used in place of #buildStateMap). Excluding
// building the state map, this method should run in O(n) time.
export const finiteAutomaton = (pattern, text, alphabet, callback) => {

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

};

// 32.4.2
// Finally, build a KMP matcher, similar to the finite automaton matcher
// above. NB: Take care that each time you change state due to a mismach,
// you must check if the character that caused you to decrement state
// is now a match.
export const knuthMorrisPratt = (pattern, text) => {

};
