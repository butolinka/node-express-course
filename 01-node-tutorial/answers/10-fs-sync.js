const {readFileSync, writeFileSync} = require('fs');


const first = readFileSync('./temporary/fileA.txt', 'utf8');
const second = readFileSync('./temporary/fileB.txt', 'utf8');

writeFileSync('./temporary/new-file.txt',
 `Here is the result ${first} and ${second}`,
{flag:'a'});