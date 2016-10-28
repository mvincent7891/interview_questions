import { expect } from 'chai';
import { generatePrimes, isPrime } from '../lib/cci6.js';

describe("Sieve of Eratosthes", function () {

  describe("6.1 #generatePrimes", function() {

    it("works with a small number", function() {
      let result = generatePrimes(20);
      let expected = [ 2, 3, 5, 7, 11, 13, 17, 19 ];
      expect(result).to.eql(expected);
    });

    it("works with a larger number", function() {
      let result = generatePrimes(100);
      let expected = [ 2, 3, 5, 7, 11, 13, 17, 19, 23,
                       29, 31, 37, 41, 43, 47, 53, 59,
                       61, 67, 71, 73, 79, 83, 89, 97 ];
      expect(result).to.eql(expected);
    });

  });

  describe("6.2 #isPrime", function() {
    // On my system I got this down to around 1200 ms for the final two
    // test cases.
    this.timeout(1500);

    it("works with a small prime", function() {
      let result = isPrime(13);
      expect(result).to.be.true;
    });

    it("works with a larger prime", function() {
      let result = isPrime(97);
      expect(result).to.be.true;
    });

    it("works with a larger non-prime", function() {
      let result = isPrime(77);
      expect(result).to.be.false;
    });

    it("works with an extremely large prime", function() {
      let result = isPrime(9999973);
      expect(result).to.be.true;
    });

    it("works with an extremely large non-prime", function() {
      let result = isPrime(9999963);
      expect(result).to.be.false;
    });


  });

});
