import { expect } from 'chai';
import {countingSort, radixSort, bucketSort} from '../lib/chA8.js';
import { shuffle } from '../util/shuffle.js';


describe("Chapter A8 Questions", () => {

  describe("#countingSort", () => {

    it("handles a simple case", function () {
      let unsorted = [0, 3, 2, 4, 1, 5, 6, 7];
      let sorted, counting;
      [sorted, counting] = countingSort(unsorted);
      expect(sorted).to.eql([0, 1, 2, 3, 4, 5, 6, 7]);
      expect(counting).to.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it("handles a more complicated case", function () {
      let original = [0, 0, 1, 1, 2, 2, 2, 4, 4, 5, 7, 11];
      let unsorted = original.slice(0);
      shuffle(unsorted);
      let sorted, counting;
      [sorted, counting] = countingSort(unsorted);
      expect(sorted).to.eql(original);
      expect(counting).to.eql([2, 4, 7, 7, 9, 10, 10, 11, 11, 11, 11, 12]);
    });

  });

  describe("#radixSort", () => {

    it("sorts a small list of numbers", function () {
      let original = [123, 124, 125, 223, 224, 225, 323, 324, 325];
      let unsorted = original.slice(0);
      shuffle(unsorted);
      let sorted = radixSort(unsorted, 3);
      expect(sorted).to.eql(original);
    });

    it("sorts a larger list of numbers", function () {
      let original = Array.from({length: 900}, (v,k) => k + 100);
      let unsorted = original.slice(0);
      shuffle(unsorted);
      let sorted = radixSort(unsorted, 3);
      expect(sorted).to.eql(original);
    });

  });

  describe("#bucketSort", () => {

    it("sorts a small list of floats", function () {
      let original = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7];
      let unsorted = original.slice(0);
      shuffle(unsorted);
      let sorted = bucketSort(unsorted);
      expect(sorted).to.eql(original);
    });

    it("sorts a small list of floats", function () {
      let original = [0.1, 0.15, 0.2, 0.23, 0.3, 0.35, 0.4,
                      0.5, 0.6, 0.7, 0.81, 0.87, 0.92, 0.97];
      let unsorted = original.slice(0);
      shuffle(unsorted);
      let sorted = bucketSort(unsorted);
      expect(sorted).to.eql(original);
    });

  });

});
