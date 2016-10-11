import { expect } from 'chai';
import { hanoi, solveNQueens } from '../lib/ch16.js';

describe("Chapter 16 Questions", () => {

  describe("#hanoi", () => {

    it("solves with 3 rings", function () {
      let pegs = [[3, 2, 1], [], []];
      hanoi(3, pegs, 0, 2, 1);
      expect(pegs).to.equal([[], [], [3,2,1]]);
    });

    it("solves with 5 rings", function () {
      let pegs = [[5, 4, 3, 2, 1], [], []];
      hanoi(5, pegs, 0, 2, 1);
      expect(pegs).to.equal([[], [], [5, 4, 3, 2, 1]]);
    });

  });

  describe("#solveNQueens", () => {

    it("solves n queens when n is 8", function () {
      let result = solveNQueens(8);
      expect(result.length).to.equal(92);
    });

    it("solves n queens when n is 4", function () {
      let result = solveNQueens(4);
      expect(result.length).to.equal(2);
    });

  });

});
