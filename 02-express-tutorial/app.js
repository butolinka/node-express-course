const express = require('express');
const app = express();
const peopleRouter = require('./routes/people');
const productsRouter= require('./routes/products');



// const logger = (req, res, next)=>{
//     const method= req.method;
//     const url = req.url;
//     const hour = new Date().getHours();
//     const minute = new Date().getMinutes();
//     const second = new Date().getSeconds();
//     const time = `${hour}:${minute}:${second}`;
//     console.log(method, url, time);
//     next();
// };

app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1/people', peopleRouter);
app.use('/api/v1/products', productsRouter);

app.get('/api/v1/test', (req, res)=>{
    res.json({ message: "It worked!" });
});


app.all('*',(req,res)=>{
    res.status(404).send('<h1>resourse not found</h1>');
});

app.listen(3000, () => {
    console.log('server is on');
});
