import { expect } from 'chai';
import { dutchFlag, stockPicker,
         randomSubsets, spiralOrdering } from '../lib/ch06.js';

describe("Chapter 6 Question", function () {

  describe("6.1 #dutchFlag", function() {
    it("works with an example case", function() {
      var arr  = [6, 3, 3, 4, 2, 1, 2, 2, 3, 8, 7, 6, 5, 3];
      var result = dutchFlag(arr, 1);
      expect(result[4]).to.eql(3);
      expect(result[7]).to.eql(3);
      expect(result[0]).to.be.below(3);
      expect(result[arr.length - 1]).to.be.above(3);
    });
  });

  describe("6.6 #stockPicker", function() {
    it("does not settle for a local max", function() {
      var arr  = [13, 7, 12, 8, 13];
      var result = stockPicker(arr);
      expect(result).to.eql([1, 4]);
    });

    var tests = [
      {args: [13, 7, 12, 5, 13], expected: [3, 4]},
      {args: [5, 4, 3, 8, 20], expected: [2, 4]},
      {args: [1, 2, 3, 4], expected: [0, 3]}
    ];

    tests.forEach(test => {
      it('picks the right days', () => {
        let result = stockPicker(test.args);
        expect(result).to.eql(test.expected);
      });
    });

  });

  describe("6.11 #randomSubsets", function () {
    it("generates subsets of the appropriate length", function () {
      let arr = Array.from({length: 100}, (v, k) => k);
      let result = randomSubsets(arr, 10);
      expect(result.length).to.eql(10);
    });

    it("(usually) does not generate the same subset for identical inputs", function() {
      let arr1 = Array.from({length: 100}, (v, k) => k);
      let result1 = randomSubsets(arr1, 5);
      let result2 = randomSubsets(arr1, 5);
      expect(result1).to.not.eql(result2);
    });
  });

  describe("6.17 #spiralOrdering", function () {
    it("works with a 3x3 array", function () {
      let matrix = [[1,2,3],[4,5,6],[7,8,9]];
      let result = spiralOrdering(matrix);
      expect(result).to.eql([1,2,3,6,9,8,7,4,5]);
    });

    it("works with a 4x4 array", function () {
      let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
      let result = spiralOrdering(matrix);
      expect(result).to.eql([1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]);
    });
  });

});
