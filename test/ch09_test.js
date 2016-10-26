import { expect } from 'chai';
import { evalRPN, isWellFormed,
         treeLevels } from '../lib/ch09.js';
import { TreeNode } from '../util/tree.js';

describe("Chapter 9 Questions", function () {

  describe("9.2 #evalRPN", function () {

    it("works with addition and multiplication", function () {
      let result = evalRPN('3,4,+,2,*,1,+');
      expect(result).to.equal(15);
    });

    it("works with a single number", function () {
      expect(evalRPN('172')).to.equal(172);
    });

    it("works with division and negative numbers", function () {
      let result = evalRPN('-672,6,/,28,/');
      expect(result).to.equal(-4);
    });

  });

  describe("9.3 #isWellFormed", function () {

    it("returns true for a well-formed case", function () {
      let result = isWellFormed('([]){()}');
      expect(result).to.be.true;
    });

    it("returns false for an ill-formed case", function () {
      let result = isWellFormed('([]){()');
      expect(result).to.be.false;
    });

  });

  describe("9.7 #treeLevels", function () {

    it("works with a sparse tree", function () {
      let a = new TreeNode(3);
      let b = new TreeNode(1);
      let c = new TreeNode(4);
      a.right = b;
      b.right = c;

      let result = treeLevels(a);
      expect(result).to.eql([[3],[1],[4]]);
    });

    it("works with a full tree", function () {
      let a = new TreeNode(314);
      let b = new TreeNode(6);
      let c = new TreeNode(6);
      let d = new TreeNode(5);
      let e = new TreeNode(7);
      let f = new TreeNode(8);

      a.left = b;
      a.right = c;
      b.left = d;
      b.right = e;
      c.left = f;

      let result = treeLevels(a);
      expect(result).to.eql([[314],[6,6],[5,7,8]]);
    });

  });

});
