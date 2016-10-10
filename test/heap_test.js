import { expect } from 'chai';
import { Heap } from '../util/heap.js';

describe("Testing heap", () => {

  describe("#peek", () => {

    it("works with a one element heap", function () {
      let newHeap = new Heap();
      newHeap.insert(3);
      let result = newHeap.peek();
      expect(result).to.equal(3);
    });

    it("works with a larger heap", function () {
      let newHeap = new Heap();
      newHeap.insert(3);
      newHeap.insert(2);
      newHeap.insert(1);
      newHeap.insert(4);
      newHeap.insert(0);
      let result = newHeap.peek();
      expect(result).to.equal(1);
    });

  });

});
