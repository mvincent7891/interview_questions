import { expect } from 'chai';
import {sortedArrSort, kthLargest} from '../lib/ch11.js';

describe("Chapter 11 Questions", () => {

 describe("11.1 #sortedArrSort", () => {

   it("merges sorted arrays", function () {
     let a = [1, 3, 5];
     let b = [2, 4, 6];
     let c = [0];

     let result = sortedArrSort(a, b, c);
     expect(result).to.equal([0,1,2,3,4,5,6]);
   });

 });

 describe("11.4 #kthLargest", () => {

   var tests = [
     {arr: [1,2,3,4,5,6,7], k: 3, nth:  '3rd', expected: 5},
     {arr: [1,2,3,4,5,6,7,8], k: 3, nth: '3rd', expected: 6},
     {arr: [12,4,5,6,2,3,8,10,1,13], k: 2, nth: '2nd', expected: 12}
   ];

   tests.forEach(test => {
     it(`picks the ${test.nth} largest element from a ${test.arr.length} element array`, () => {
       let result = kthLargest(test.args, test.k);
       expect(result).to.equal(test.expected);
     });
   });

 });

});
