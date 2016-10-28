// Cracking the Coding Interview
// Chapter 6: Math and Logic Puzzles

const sieveOfEratosthenes = max => {

  let flags = { 0: false, 1: false, 2: true, 3: true };
  for (let i = 5; i <= max; i += 1) {
    flags[i] = true;
  }

  let prime = 2;
  while (prime <= Math.ceil(Math.sqrt(max))) {
    for (let j = prime * prime; j <= max; j += prime) {
      flags[j] = false;
    }
    prime = findNextPrime(prime, flags);
  }
  return flags;
};

const findNextPrime = (prime, flags) => {
  let next = prime + 1;
  while (next <= flags.length && !flags[next]) {
    next += 1;
  }
  return next;
};

// Return an array of all primes below max, where max > 3
export const generatePrimes = max => {
  let flags = sieveOfEratosthenes(max);
  return Object.keys(flags).filter(key => flags[key]).map(str => parseInt(str));
};

// Return a boolean representing whether the given number is prime
export const isPrime = num => {
  let flags = sieveOfEratosthenes(num + 1);
  return flags[num];
};
