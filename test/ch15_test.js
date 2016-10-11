import { expect } from 'chai';
import { TreeNode } from '../util/tree.js'
import {isBST, firstGreaterValue, kthLargestBST} from '../lib/ch15.js';

describe("Chapter 15 Questions", () => {

  let a = new TreeNode(10);
  let b = new TreeNode(5);
  let c = new TreeNode(15);
  let d = new TreeNode(3);
  let e = new TreeNode(7);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  
  describe("#isBST", () => {


    it("returns true for a binary search tree", function () {
      let f = new TreeNode(17);
      c.right = f;
      let result = isBST(a);
      expect(result).to.be.true;
    });

    it("returns false for a tree that violates BST", function () {
      let f = new TreeNode(13);
      c.right = f;
      let result = isBST(a);
      expect(result).to.be.false;
    });

  });

  describe("#firstGreaterValue", () => {

    it("finds the first greater value", function () {
      let f = new TreeNode(13);
      c.left = f;
      let result = firstGreaterValue(a, 11);
      expect(result).to.equal(13);
    });

  });

  describe("#kthLargestBST", () => {
    let f = new TreeNode(13);
    c.left = f;

    it("finds the kth largest element", function () {
      let result = kthLargestBST(a, 2);
      expect(result).to.equal(13);
    });

    it("finds the kth largest element", function () {
      let result = kthLargestBST(a, 3);
      expect(result).to.equal(10);
    });

  });

});
