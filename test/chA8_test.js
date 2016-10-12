import { expect } from 'chai';
import {countingSort, radixSort, bucketSort} from '../lib/chA8.js';
import { shuffle } from '../util/shuffle.js';

describe("Chapter A8 Questions", () => {

  describe("#countingSort", () => {

    it("handles a simple case", function () {
      let unsorted = [0, 3, 2, 4, 1, 5, 6, 7];
      let sorted, counting;
      [sorted, counting] = countingSort(unsorted);
      expect(sorted).to.equal([0, 1, 2, 3, 4, 5, 6, 7]);
      expect(counting).to.equal([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it("handles a more complicated case", function () {
      let original = [0, 0, 1, 1, 2, 2, 2, 4, 4, 5, 7, 11];
      let unsorted = original.slice(0);
      shuffle(unsorted);
      let sorted, counting;
      [sorted, counting] = countingSort(unsorted);
      expect(sorted).to.equal(original);
      expect(counting).to.equal([2, 4, 7, 7, 9, 10, 10, 11, 11, 11, 11, 12]);
    });

  });

  describe("#radixSort", () => {

    it("sorts a small list of numbers", function () {
      let original = [123, 124, 125, 223, 224, 225, 323, 324, 325];
      let unsorted = original.slice(0);
      shuffle(unsorted);
      let sorted = radixSort(unsorted, 3);
      expect(sorted).to.equal(original);
    });

    it("sorts a larger list of numbers", function () {
      let original = Array.from({length: 900}, (v,k) => k + 100);
      let unsorted = original.slice(0);
      shuffle(unsorted);
      let sorted = radixSort(unsorted, 3);
      expect(sorted).to.equal(original);
    });

  });

  describe("#bucketSort", () => {

    it("", function () {

    });

  });

});
