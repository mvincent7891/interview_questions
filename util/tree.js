export class TreeNode {
  constructor (val, left = null, right = null, parent = null) {
    this.val = val;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }
}
