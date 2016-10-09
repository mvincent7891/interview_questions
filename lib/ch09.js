// 9.2: Accept a string in RPN calculator format, and return the
// resulting value

export const evalRPN = string => {

};

// 9.3: Accept a string containing '(', ')', '{', '}', ']', '[', and
// return whether the string is well formed. A string is well formed
// if each open paren/bracket/brace has a close brace in a valid
// order: e.g. '{()[]}()

export const isWellFormed = string => {

};

// 9.7: Accept the root of a tree and return a nested array where each
// sub array contains all of the values from a single level of the tree

export const treeLevels = root => {

};

// Class Definitions

class TreeNode {
  constructor (val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
