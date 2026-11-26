// judge-laugh-one-line — Make the Judge Laugh in One Line (make.fun)
// Prints the single original one-liner stored in line.txt and checks it
// fits the bounty's one-line, at-most-200-characters rule.
// The joke is aimed squarely at its reader: the AI judge itself.
'use strict';
const fs = require('node:fs');
const path = require('node:path');

const line = fs.readFileSync(path.join(__dirname, 'line.txt'), 'utf8').trim();
const MAX_CHARS = 200;

if (!line) {
  console.error('line.txt is empty');
  process.exit(1);
}
if (line.includes('\n')) {
  console.error('the entry must be exactly one line');
  process.exit(1);
}
if (line.length > MAX_CHARS) {
  console.error(`line is ${line.length} characters, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

console.log(line);
console.log(`(${line.length} characters, one line, within the ${MAX_CHARS}-character cap)`);
