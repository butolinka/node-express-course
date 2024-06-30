const { writeFile, readFile } = require("fs").promises;

const writer = async()=>{
    try{
        await writeFile('./content/temp.txt', 'test text');
    }
    catch(error){
        console.log(error);
    }
};
const reader = async()=>{
    try{
        const readText =await readFile('./content/temp.txt','utf8');
        console.log(readText);
    } catch(error){
        console.log(error);
    }
};
const readWrite = async()=>{
    try{
    const reader =await readFile('./content/temp.txt','utf8');
    const writer = await writeFile('./content/temp.txt','test text ONCE AGAIN');
    
}
catch(error){
    console.log(error);
}
};

writer();
reader();
readWrite();