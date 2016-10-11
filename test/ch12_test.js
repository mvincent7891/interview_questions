import { expect } from 'chai';
import { firstOccurrence, closestRoot,
        kthLargestInPlace } from '../lib/ch12.js';
import { shuffle } from '../util/shuffle.js';

describe("Chapter 12 Questions", () => {

  describe("12.1 #firstOccurence", () => {

    var tests = [
      {arr: [1, 2, 2, 2, 2, 3, 4, 6], target: 2, expected: 1},
      {arr: [1, 2, 2, 2, 2, 3, 4, 6], target: 3, expected: 5},
      {arr: [1, 2, 2, 2, 2, 3, 4, 6], target: 1, expected: 0},
      {arr: [1, 1, 1, 1, 1, 1, 1, 8], target: 8, expected: 7}
    ];

    tests.forEach(test => {
      it("returns the index of the first instance of an element in a sorted array", function () {
        let result = firstOccurrence(test.arr, test.target);
        expect(result).to.equal(test.expected);
      });
    });

    it("returns null when the element is not found", function () {
      let result = firstOccurrence([0,1,3,4,5,6,7], 2);
      expect(result).to.not.equal(result);
    });

  });

  // describe("12.4 #closestRoot", () => {
  //
  //   it("returns the closest root for a perfect square", function () {
  //
  //   });
  //
  //   it("works for a small perfect root", function () {
  //
  //   });
  //
  //   it("works for a non perfect square", function () {
  //
  //   });
  //
  // });

  describe("12.8 #kthLargestInPlace", () => {
    let original = Array.from({length: 10}, (v, k) => k);
    let tests = [];
    for (let num of original) {
      let arr = original.slice(0);
      shuffle(arr);
      let k = 10 - num;
      let expected = num;
      tests.push({arr: arr, k: k, expected: expected});
    }

    tests.forEach(test => {
      it(`picks the kth largest element when k is ${test.k}`, function () {
        let result = kthLargestInPlace(test.arr, test.k);
        expect(result).to.equal(test.expected);
      });
    });

  });

});
