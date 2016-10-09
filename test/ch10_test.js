import { TreeNode } from '../util/tree.js';
import { expect } from 'chai';
import { checkBalance,
         leastCommonAncestor } from '../lib/ch09.js';

describe("Chapter 10 Questions", function () {

  describe("10.1 #checkBalance", function () {

    it("returns false for an unbalanced tree", function () {

    });

    it("returns true for a balanced tree", function () {

    });

  });

  describe("10.4 #leastCommonAncestor", function () {

    it("", function () {

    });

  });

});

describe '10.1 #check_balanced' do
it 'returns false for an unbalanced tree' do
 a = TreeNode.new(3)
 b = TreeNode.new(1)
 c = TreeNode.new(4)
 a.right = b
 b.right = c

 expect(check_balance(a)).to be(false)
end

it 'returns true for a balanced tree' do
 a = TreeNode.new(314)
 b = TreeNode.new(6)
 c = TreeNode.new(6)
 d = TreeNode.new(5)
 e = TreeNode.new(7)
 f = TreeNode.new(8)

 a.left = b
 a.right = c
 b.left = d
 b.right = e
 c.left = f

 expect(check_balance(a)).to be(true)
end
end

describe '10.4 #least_common_ancestor' do
a = TreeNode.new(10)
b = TreeNode.new(6)
c = TreeNode.new(15)
d = TreeNode.new(5)
e = TreeNode.new(7)
f = TreeNode.new(8)

a.left = b
b.parent = a
a.right = c
c.parent = a
b.left = d
d.parent = b
b.right = e
e.parent = b
c.left = f
f.parent = c

it 'returns the least common ancestor' do
 expect(least_common_ancestor(d, e).val).to eq(6)
end

it 'returns the lca when the lca is one of the nodes' do
 expect(least_common_ancestor(a, b).val).to eq(10)
end
end
