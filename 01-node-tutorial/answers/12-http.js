const http =require('http');

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('welcome to our home page');
        return;
    }
    if(req.url==='/about'){
        res.end('here is our history');
        return;
    }
    res.end(`
    <h1>OOOOPS!</h1>
    <p>404 the page is not exist</p>
    <a href='/'>go back home</a>
    `);
});

server.listen(3000);