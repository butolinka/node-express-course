const {readFile, writeFile} = require('fs');

readFile('./temporary/fileA.txt', 'utf8', (err, result)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log("at start");
    const first = result;
    readFile('./temporary/fileB.txt', 'utf8', (err, result)=>{
        if(err) {
            console.log(err);
            return;
        }
        console.log("at second step");
        const second = result;
        writeFile('./temporary/new-file.txt',
    `Here is the result ${first} and ${second}`,
{flag:'a'},
(err, result)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log("finish");
});
    });
});