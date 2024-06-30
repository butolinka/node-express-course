const{createReadStream} = require('fs');

const stream  = createReadStream('../content/big.txt', {highWaterMark:200, encoding:'utf8'});

stream.on('data', (result)=>{
    console.log(result);
});
let chunkCount = 0;
stream.on('data', (chunk)=>{
    chunkCount++;
    console.log(chunk);
});
stream.on('end', ()=>{
    console.log(`By the end of the stream we have ${chunkCount} number of chunks`);
});
stream.on('error', (err)=>{
    console.log(err);
});