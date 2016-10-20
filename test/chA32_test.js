import { expect } from 'chai';
import {naiveMatch, rabinKarp, longestPrefix,
       buildStateMap,
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

  describe("#rabinKarp", () => {

    it("", function () {

    });

  });

  describe("#longestPrefix", () => {

    it("handles cases when there is no match", function () {
      let pattern = 'cbcb';
      let text = 'ababab';
      let result = longestPrefix(pattern, text);
      expect(result).to.equal(0);
    });

    it("it returns the length of the longest prefix", function () {
      let pattern = 'abac';
      let text = 'aabbabab';
      let result = longestPrefix(pattern, text);
      expect(result).to.equal(2);
    });

    it("it returns the length of the longest prefix", function () {
      let pattern = 'zzzzz';
      let text = 'xyxyxyzzzz';
      let result = longestPrefix(pattern, text);
      expect(result).to.equal(4);
    });

  });

  describe("#buildStateMap", () => {

    it("handles a simple case", function () {
      let alphabet = ['a', 'b', 'c'];
      let pattern = 'ab';
      let result = buildStateMap(alphabet, pattern);
      let expected = {
        0: {
          'a': 1, 'b': 0, 'c': 0
        },
        1: {
          'a': 1, 'b': 2, 'c': 0
        },
      };
      expect(result).to.eql(expected);
    });

    it("handles a more difficult case", function () {
      let alphabet = ['a', 'b', 'c'];
      let pattern = 'ababcab';
      let result = buildStateMap(alphabet, pattern);
      let expected = {
        0: {
          'a': 1, 'b': 0, 'c': 0
        },
        1: {
          'a': 1, 'b': 2, 'c': 0
        },
        2: {
          'a': 3, 'b': 0, 'c': 0
        },
        3: {
          'a': 1, 'b': 4, 'c': 0
        },
        4: {
          'a': 3, 'b': 0, 'c': 5
        },
        5: {
          'a': 6, 'b': 0, 'c': 0
        },
        6: {
          'a': 1, 'b': 7, 'c': 0
        }
      };
      expect(result).to.eql(expected);
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
