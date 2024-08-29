const { products } = require("./data");
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('server is on');
});
app.use(express.static("./public"));
app.get('/api/v1/test', (req, res)=>{
    res.json({ message: "It worked!" });
});
app.get('/api/v1/products', (req, res)=>{
    res.json({products });
});
app.get('/api/v1/products/:productID', (req, res)=>{
    const {productID} = req.params;
    const theProduct = products.find((product) => product.id === Number(productID));
    if(!theProduct){
        return res.status(404).send('<h1>the product was not found</h1>');
    }
    return res.json(theProduct);
});

app.get('/api/v1/query',(req,res)=>{
    const {search, limit, price} = req.query;
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        });
    }
    if (limit){
        sortedProducts =  sortedProducts.slice(0, Number(limit));
    }
    if (price){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.price <= Number(price);
        });
    }
    if (sortedProducts.length<1){
        res.status(200).json('the product you tried to find does not exist');
    }
    res.status(200).json(sortedProducts);
});


app.all('*',(req,res)=>{
    res.status(404).send('<h1>resourse not found</h1>');
});