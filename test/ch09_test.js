import { expect } from 'chai';
import { evalRPN, isWellFormed,
         treeLevels, TreeNode } from '../lib/ch09.js';

describe("Chapter 9 Questions", function () {

  describe("9.2 #evalRPN", function () {

    it("works with addition and multiplication", function () {
      let result = evalRPN('3,4,+,2,*,1,+');
      expect(result).to.equal(15);
    });

    it("works with a single number", function () {
      expect(evalRPN(172)).to.equal(172);
    });

    it("works with division and negative numbers", function () {
      let result = evalRPN('-672,6,/,28,/').to.equal(4)
      expect(result).to.equal(-4);
    });

  });

  describe("9.3 #isWellFormed", function () {

    it("", function () {

    });

  });

  describe("9.7 #treeLevels", function () {

    it("", function () {

    });

  });

});



describe '9.2 #eval_RPN' do
  it 'works for addition and multiplication' do
    expect(eval_RPN("3,4,+,2,*,1,+")).to eq(15)
  end

  it 'works for a single number' do
    expect(eval_RPN('1972')).to eq(1972)
  end

  it 'works for a single number' do
    expect(eval_RPN('-641,6,/,28,/')).to eq(-4)
  end
end

describe '9.3 #is_well_formed?' do
  it 'returns true for a well formed case' do
   expect(is_well_formed?('([]){()}')).to be(true)
  end

  it 'returns false for a case that isn\'t well formed' do
   expect(is_well_formed?('([]){()')).to be(true)
  end
end

describe '9.7 #tree_levels' do
  it 'it works for a sparse tree' do
    a = TreeNode.new(3)
    b = TreeNode.new(1)
    c = TreeNode.new(4)
    a.right = b
    b.right = c

    expect(tree_levels(a)).to eq([[3],[1],[4]])
  end

  it 'works for a full tree' do
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

    expect(tree_levels(a)).to eq([[314],[6,6],[5,7,8]])
  end
end
