var writeFile = require('write');

const insertIt = string => {
  string += `\n\/\/    it(\"\", function () {\n`;
  string += `\n\/\/    });`;
  return string;
};

let chapterNumber = 11;

let textToWrite = ``;

textToWrite += `import { expect } from \'chai\';\n\n`;

textToWrite += `\/\/describe(\"Chapter ${chapterNumber} Questions\", () => {\n`;

textToWrite = insertIt(textToWrite);

textToWrite += `\/\/\n});`;


writeFile(`./test/ch${chapterNumber}_test.js`, `${textToWrite}`);
