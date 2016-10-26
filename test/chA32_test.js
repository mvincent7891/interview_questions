import { expect } from 'chai';
import spies from 'chai-spies';
import chai from 'chai';
import {naiveMatch, rabinKarp,
       fromString, nextNum,
       longestPrefix, buildStateMap,
       finiteAutomaton, buildKMPMap,
       knuthMorrisPratt} from '../lib/chA32.js';

chai.use(spies);

describe("Chapter A32 Questions", () => {

  describe("Naive matching:", () => {
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
  });

  describe("Rabin-Karp:", () => {
    describe("#fromString", () => {

      it("handles a single digit", function () {
        let str = '7';
        let result = fromString(str);
        expect(result).to.equal(7);
      });

      it("handles a longer string", function () {
        let str = '367465';
        let result = fromString(str);
        expect(result).to.equal(367465);
      });

    });

    describe("#nextNum", () => {

      it("computes the next number correctly", function () {
        let next = 7;
        let tests = [
          {current: 324, expected: 247},
          {current: 4365, expected: 3657},
          {current: 83745, expected: 37457}
        ];
        tests.forEach(test => {
          let result = nextNum(test.current, next);
          expect(result).to.equal(test.expected);
        });
      });

    });

    describe("#rabinKarp", () => {

      it("handles a simple case", function () {
        let pattern = '0';
        let text = '0';
        let result = rabinKarp(pattern, text);
        expect(result).to.eql([0]);
      });

      it("handles a slightly more complicated case", function () {
        let pattern = '0';
        let text = '00';
        let result = rabinKarp(pattern, text);
        expect(result).to.eql([0, 1]);
      });

      it("handles a complex case", () => {
        let pattern = '73846';
        let text = '17384612345678738469';
        let result = rabinKarp(pattern, text);
        expect(result).to.eql([1, 14]);
      });

    });
  });

  describe("Finite Automaton:", () => {
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

      it("calls #buildStateMap, passed in as callback parameter", () => {
        let spy = chai.spy(buildStateMap);
        let alphabet = ['c'];
        let pattern = 'c';
        let text = 'cc';
        let result = finiteAutomaton(pattern, text, alphabet, spy);
        expect(spy).to.have.been.called.once;
      });

      it("handles a simple case", function () {
        let alphabet = ['a', 'b', 'c'];
        let pattern = 'abab';
        let text = 'cabacababcc';
        let result = finiteAutomaton(pattern, text, alphabet, buildStateMap);
        expect(result).to.eql([5]);
      });

      it("returns an empty array when no match is found", function () {
        let alphabet = ['a', 'b', 'c'];
        let pattern = 'aaaa';
        let text = 'cabacababcc';
        let result = finiteAutomaton(pattern, text, alphabet, buildStateMap);
        expect(result).to.eql([]);
      });

      it("finds multiple matches for a gene in a DNA sequence", function () {
        let alphabet = ['a', 't', 'c', 'g'];
        let pattern = 'acgtac';
        let text = 'acgtgacgtacacatgcatatacgtac';
        let result = finiteAutomaton(pattern, text, alphabet, buildStateMap);
        expect(result).to.eql([5, 21]);
      });

      it("finds matches in a large block of text", () => {
        let alphabet = ['a', 's', 'd', 'f', 'j', 'k', 'l'];
        let pattern = 'aajjddkk';
        let text = 'asfasdflaklaskalskfjalsdallaksfjjalkdalalsdfkaslalakflaksdlaksflakjflalalkajlsfkjalsdkfalaskasdlfasljalsdaajjddkkaslfajsfjfjalfskdjaflasdlfkajldfakaldlfkjldfalfkasjflasjfaldkajslfkaljd';
        let result = finiteAutomaton(pattern, text, alphabet, buildStateMap);
        expect(result).to.eql([105]);
      });

    });
  });


  describe("Knuth-Morris-Pratt:", () => {
    describe("#buildKMPMap", () => {

      it("handles a simples case", function () {
        let pattern = 'abab';
        let result = buildKMPMap(pattern);
        const expected = {
          1: 0, 2: 0, 3: 1, 4: 2
        };
        expect(result).to.eql(expected);
      });

      it("handles a more complicated case", function () {
        let pattern = 'ababababca';
        let result = buildKMPMap(pattern);
        const expected = {
          1: 0, 2: 0, 3: 1, 4: 2, 5: 3,
          6: 4, 7: 5, 8: 6, 9: 0, 10: 1
        };
        expect(result).to.eql(expected);
      });

    });

    describe("#knuthMorrisPratt", () => {

      it("handles a simple case", function () {
        let alphabet = ['a', 'b', 'c'];
        let pattern = 'abab';
        let text = 'cabacababcc';
        let result = knuthMorrisPratt(pattern, text);
        expect(result).to.eql([5]);
      });

      it("returns an empty array when no match is found", function () {
        let alphabet = ['a', 'b', 'c'];
        let pattern = 'aaaa';
        let text = 'cabacababcc';
        let result = knuthMorrisPratt(pattern, text);
        expect(result).to.eql([]);
      });

      it("finds multiple matches for a gene in a DNA sequence", function () {
        let alphabet = ['a', 't', 'c', 'g'];
        let pattern = 'acgtac';
        let text = 'acgtgacgtacacatgcatatacgtac';
        let result = knuthMorrisPratt(pattern, text);
        expect(result).to.eql([5, 21]);
      });

      it("finds matches in a large block of text", () => {
        let alphabet = ['a', 's', 'd', 'f', 'j', 'k', 'l'];
        let pattern = 'aajjddkk';
        let text = 'asfasdflaklaskalskfjalsdallaksfjjalkdalalsdfkaslalakflaksdlaksflakjflalalkajlsfkjalsdkfalaskasdlfasljalsdaajjddkkaslfajsfjfjalfskdjaflasdlfkajldfakaldlfkjldfalfkasjflasjfaldkajslfkaljd';
        let result = knuthMorrisPratt(pattern, text);
        expect(result).to.eql([105]);
      });

    });
  });

});
