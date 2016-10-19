import { expect } from 'chai';
import {naiveMatch, rabinKarp, longestPrefix,
       finiteAutomaton, knuthMorrisPratt} from '../lib/chA32.js';

describe("Chapter A32 Questions", () => {

  describe("#naiveMatch", () => {

    it("finds a single match", function () {
      let pattern = 'def';
      let text = 'abcdefghi';
      let result = naiveMatch(pattern, text);
      expect(result).to.eql([3]);
    });

    it("finds multiple matches", function () {
      let pattern = 'bcd';
      let text = 'abcdefabcdef';
      let result = naiveMatch(pattern, text);
      expect(result).to.eql([1, 7]);
    });

  });

  //TODO: Write some tests using DNA sequences and genes

  describe("#longestPrefix", () => {
    it("it returns the length of the longest prefix", function () {
      let pattern = 'abac';
      let text = 'aabbabab';
      let result = longestPrefix(pattern, text);
      expect(result).to.equal(2);
    });
  });

  describe("#rabinKarp", () => {

    it("", function () {

    });

  });

  describe("#finiteAutomaton", () => {

    it("", function () {

    });

  });

  describe("#knuthMorrisPratt", () => {

    it("", function () {

    });

  });

});
