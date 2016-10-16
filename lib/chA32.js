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
// if there is a match for the pattern (length m). Return the number of
// matches.

export const naiveMatch = (pattern, text) => {

};

// 32.2 RABIN-KARP MATCHING:
// TODO: Return not only the number of matches, but also the number of
// spurious matches (i.e., those that evaluate to the same number after
// mod q)
export const rabinKarp = (pattern, text, q) => {

};

// 32.3 FINITE AUTOMATON MATCHING:

export const finiteAutomaton = (pattern, text) => {

};

// 32.4 KNUTH-MORRIS-PRATT MATCHING:

export const knuthMorrisPratt = (pattern, text) => {

};
