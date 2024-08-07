const { error } = require("console");

const { writeFile, readFile } = require("fs").promises;

writeFile('./content/temp.txt','write first line of the text\n')
.then(()=>{
    return writeFile('./content/temp.txt','now write second line of the text\n',
        {flag: 'a'});
})
.then(()=>{
    return writeFile('./content/temp.txt','now third line of the text\n',
        {flag: 'a'});
})
.then(()=>{
    return writeFile('./content/temp.txt','now forth line of the text\n',
        {flag: 'a'});
})
.then(()=>{
    return writeFile('./content/temp.txt','and last one line of the text\n',
        {flag: 'a'});
})
.catch((error)=>{
    console.log(error);
});