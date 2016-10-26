import { TreeNode } from '../util/tree.js';

// 9.2: Accept a string in RPN calculator format, and return the
// resulting value

export const evalRPN = string => {
  let chars = string.split(',');
  let len = chars.length;
  switch (len) {
    case 1:
      return parseInt(chars[0]);
    case 2:
      throw "Missing Parameter";
    case 3:
      return eval(`${chars[0]} ${chars[2]} ${chars[1]}`);
    default:
      let result = evalRPN(chars.slice(0, len - 2).join(','));
      return eval(`${result} ${chars[len - 1]} ${chars[len - 2]}`);
  }
};

// 9.3: Accept a string containing '(', ')', '{', '}', ']', '[', and
// return whether the string is well formed. A string is well formed
// if each open paren/bracket/brace has a close brace in a valid
// order: e.g. '{()[]}()

const brackets = {
  '{': null,
  '}': '{',
  '[': null,
  ']': '[',
  '(': null,
  ')': '('
};

export const isWellFormed = string => {
  let chars = string.split('');
  let stack = [];
  for (let char of chars) {
    let open = brackets[char];
    if (open) {
      let last = stack.pop();
      if (last !== open) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0 ? true : false;
};

// 9.7: Accept the root of a tree (use TreeNode class) and return a
// nested array where each sub array contains all of the values from
// a single level of the tree

const nodeChildren = root => {
  let children = [];
  if (root.left) { children.push(root.left); }
  if (root.right) { children.push(root.right); }
  return children;
};

export const treeLevels = root => {
  let nested = [[root.val]];
  let children = nodeChildren(root);
  while (children.length > 0) {
    let newChildren = [];
    for (let child of children) {
      newChildren = newChildren.concat(nodeChildren(child));
    }
    nested = nested.concat([children.map(child => child.val )]);
    children = newChildren;
  }
  return nested;
};
