import { expect } from 'chai';
import { palindromePerm, isConstructable,
        closestRepeat } from '../lib/ch13.js';

describe("Chapter 13 Questions", () => {

  describe("#palindromePerm", () => {

    it("returns true for a string that could be a palindrome", function () {
      let str = 'aabbcc';
      let result = palindromePerm(str);
      expect(result).to.be.true;
      str = 'aabbccecc';
      result = palindromePerm(str);
      expect(result).to.be.false;
    });

    it("returns false for a non-palindrome", function () {
      let str = 'abc';
      let result = palindromePerm(str);
      expect(result).to.be.true;
    });

  });

  describe("#isConstructable", () => {

    it("returns true for something constructable", function () {
      expect(isConstructable('the cat', 'the cat in the hat')).to.be.true;
    });

    it("returns false for something that is not constructable", function () {
      expect(isConstructable('the cat in the hat', 'the cat')).to.be.true;
    });

  });

  describe("#closestRepeat", () => {

    it("returns the word and closest indices", function () {
      let str = 'all work and no play makes for no work no fun and no results';
      let result = closestRepeat(str);
      expect(result).to.eql(['no', [7, 9]]);
    });

  });

});
