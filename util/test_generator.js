// 1. Change chapterNumber below before using
// 2. Navigate to the root directory and execute the following:
//      babel-node ./util/test_generator.js
// 3. Uncomment the tests in the newly created file

var writeFile = require('write');

const insertIt = string => {
  string += `\n\/\/    it(\"\", function () {\n`;
  string += `\n\/\/    });\n`;
  return string;
};

const insertDescribe = (string, name) => {
  string += `\n\/\/  describe(\"#${name}\", () => {\n`;
  string = insertIt(string);
  string += `\n\/\/  });\n`;
  return string;
};

let chapterNumber = 14;

if (!chapterNumber) {
  throw(`Change the chapter number, foo!`);
}

var testSubjects = require(`../lib/ch${chapterNumber}.js`);

const importSubjects = string => {
  string += `import {`;
  let names = [];
  Object.keys(testSubjects).forEach(function (subject) {
    names.push(subject.toString());
  });
  string += names.join(', ');
  string += `} from \'../lib/ch${chapterNumber}.js\';\n\n`;
  return string;
};

let textToWrite = ``;

textToWrite += `import { expect } from \'chai\';\n`;

textToWrite = importSubjects(textToWrite);

textToWrite += `\/\/describe(\"Chapter ${chapterNumber} Questions\", () => {\n`;

Object.keys(testSubjects).forEach(function (subject) {
  let methodName = subject.toString();
  textToWrite = insertDescribe(textToWrite, methodName);
});

textToWrite += `\n\/\/});`;


writeFile(`./test/ch${chapterNumber}_test.js`, `${textToWrite}`);
