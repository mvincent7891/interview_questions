import { expect } from 'chai';
import { reverseArray, nShiftInPlace } from '../lib/misc.js';

describe("Shift in Place", function () {

  describe("#reverseArray", () => {

    it("reverses the entire array with odd number of elements", function() {
      let arr = [0, 1, 2, 3, 4];
      reverseArray(arr, 0, arr.length);
      expect(arr).to.eql(arr.reverse());
    });

    it("reverses the entire array with even number of elements", function() {
      let arr = [0, 1, 2, 3];
      reverseArray(arr, 0, arr.length);
      expect(arr).to.eql(arr.reverse());
    });

    it("reverses a portion of the array", function() {
      let arr = [0, 1, 2, 3, 4];
      reverseArray(arr, 0, arr.length - 1);
      expect(arr).to.eql([3, 2, 1, 0, 4]);
    });

    it("reverses the entire array with even number of elements", function() {
      let arr = [0, 1, 2, 3, 4];
      reverseArray(arr, 1, arr.length);
      expect(arr).to.eql([0, 4, 3, 2, 1]);
    });

  });

  describe("#nShiftInPlace", () => {

    it("works with a small shift", function() {
      let original = [0, 1, 2, 3, 4];
      let shifted = [1, 2, 3, 4, 0];
      let k = 1;
      nShiftInPlace(original, k);
      expect(original).to.eql(shifted);
    });

    it("works when n % k === 0", function() {
      let original = [0, 1, 2, 3, 4, 5];
      let shifted = [2, 3, 4, 5, 0, 1];
      let k = 2;
      nShiftInPlace(original, k);
      expect(original).to.eql(shifted);
    });

    it("works when n % k !== 0", function() {
      let original = [0, 1, 2, 3, 4];
      let shifted = [2, 3, 4, 0, 1];
      let k = 2;
      nShiftInPlace(original, k);
      expect(original).to.eql(shifted);
    });

  });

});
