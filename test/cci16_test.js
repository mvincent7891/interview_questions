import { expect } from 'chai';
import { subSort, largestContiguousSum } from '../lib/cci16.js';

describe("Chapter 16 Intermediate Problems", function () {

  describe("16.16 #subSort", function() {

    it("it handles sorted arrays", function() {
      let arr = [1, 3, 5, 7, 9, 11, 13, 15];
      let expected = [null, null];
      let result = subSort(arr);
      expect(result).to.eql(expected);
    });

    it("it handles an unsorted array", function() {
      let arr = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
      let expected = [3, 9];
      let result = subSort(arr);
      expect(result).to.eql(expected);
    });

  });

  describe("16.17 #largestContiguousSum", function() {

    it("it handles a trviial case", function() {
      let arr = [2];
      let expected = 2;
      let result = largestContiguousSum(arr);
      expect(result).to.equal(expected);
    });

    it("it handles a small array", function() {
      let arr = [2, -8, 3, -2, 4, -10];
      let expected = 5;
      let result = largestContiguousSum(arr);
      expect(result).to.equal(expected);
    });

    it("it handles a larger array", function() {
      let arr = [2, -8, 3, -2, 4, -10, 12, 1, -4, 1, 4];
      let expected = 14;
      let result = largestContiguousSum(arr);
      expect(result).to.equal(expected);
    });

  });

});
