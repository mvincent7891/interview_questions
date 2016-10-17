import { expect } from 'chai';
import { intToString, stringToInt,
         baseConverter, replaceAndRemove } from '../lib/ch07.js';

describe("Chapter 7 Question", function () {

  describe("7.1", function() {
   describe("#intToString", function() {
     it("converts an integer to a string", function() {
       var int = 37;
       var result = intToString(int);
       expect(result).to.equal('thirty-seven');
     });
   });

   describe("#stringToInt", function() {
     it("converts a string to an integer", function() {
       var str = 'thirty-seven';
       var result = stringToInt(str);
       expect(result).to.equal(37);
     });
   });
  });

  describe("7.2 #baseConverter", function() {
   it("converts a binary number to hexadecimal", function() {
     let result = baseConverter('11111', 2, 16);
     expect(result).to.equal('1F');
   });

   it("converts a hexadecimal number to binary", function() {
     let result = baseConverter('1F', 16, 2);
     expect(result).to.equal('11111');
   });
  });

  describe("7.4 #replaceAndRemove", function () {
   it("replaces and removes accurately", function () {
     let arr = ['a', 'c', 'd', 'b', 'b', 'c', 'a', 'c'];
     replaceAndRemove(arr);
     expect(arr).to.equal(['d', 'd', 'c', 'd', 'c', 'd', 'd', 'c']);
   });
  });

});
