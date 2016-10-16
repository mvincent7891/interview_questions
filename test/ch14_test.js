import { expect } from 'chai';
import { intersection, mergeSorted } from '../lib/ch14.js';

describe("Chapter 14 Questions", () => {

  describe("#intersection", () => {

    it("returns the intersection of 2 sorted arrays", function () {
      let a = [2,3,3,5,5,6,7,7,8,12];
      let b = [5,5,6,8,8,9,10,10];
      let result = intersection(a, b);
      expect(result).to.eql([5,6,8]);
    });

  });

  describe("#mergeSorted", () => {

    it("merges 2 sorted arrays", function () {
      let a = [1,3,5,null,null,null];
      let b = [2,4,6];
      let result = mergeSorted(a, b);
      expect(result).to.eql([1,2,3,4,5,6]);
    });

  });

});
