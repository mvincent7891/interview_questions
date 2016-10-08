import { expect } from 'chai';
import { mergeLists, reverseSubList,
         Link, LinkedList } from '../lib/ch08.js';

describe("Chapter 8 Question", function () {

  describe("8.1 #mergeLists", function () {

    beforeEach(function() {
      let listA = new List();
      list.push(1);
      list.push(3);
      list.push(5);

      let listB = new List();
      list.push(2);
      list.push(4);
      list.push(6);

      result = mergeLists(listA, listB);
    });

    });

    it("produces a list of the correct length", function () {
      expect(result.count).to.equal(6);
    });

    it("correctly merges two lists", function () {
      expect(result.tail.prev.value).to.equal(6);
      expect(result.head.next.value).to.equal(1);
    });
  });

  describe("", function () {
   it("", function () {

   });
  });

  describe("", function () {
   it("", function () {

   });
  });

});
