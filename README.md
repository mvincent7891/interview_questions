# JS Interview Questions and Testing Suite

This repository is a compilation of common interview questions with testing suites written in Mocha. The skeletons for solutions are provided in the `./lib` folder. There are also several additional functions in the `./util` folder, which may prove helpful in solving certain problems.

For practice solving interview questions in Ruby with prewritten specs, checkout John Goddard's project [here](https://github.com/johngoddard/elements_practice), which was the basis for this repository.

### Run All Tests
- Navigate to the root directory in terminal
- Execute the following:
```
$ npm test
```

### Run a Single Test
- Navigate to the root directory in terminal
- Execute
```
$ npm test <path_to_test>
```
- For instance, to run the Chapter 12 test suite, execute the following:
```
$ npm test ./test/ch12_test.js
```

### Automate Test Creation
The tests in this repo were generated automatically with `./util/test_generator.js`. You can use it by creating a subject file that exports all the functions you wish to test. You'll need to edit the test generator to search for the right file:
- NB: You may have to install `babel-node` globally before proceeding.
- Create a subject file in `./lib` folder
- Create and export the functions you wish to test
- Open up `./util/test_generator.js`
- Edit the test generator to find the newly created subject file
- Navigate to the root directory in terminal
- Execute the following:
```
$ babel-node ./util/test_generator.js
```
- You'll find your new test file in the `./test` folder. Just uncomment the body and you're ready to write tests!

### Problem Sources
- Problems in `ch##.js` files are sourced from Elements of Programming Interviews
- Problems in `chA#.js` files are sourced from Introduction to Algorithms (Cormen)
