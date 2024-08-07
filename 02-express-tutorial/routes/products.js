const express = require("express");
const router = express.Router();
const {products} = require("../data");

router.get('/', (req, res)=>{
    res.json(products);
});
router.get('/', (req, res)=>{
    const {productID} = req.params;
    const theProduct = products.find((product) => product.id === Number(productID));
    if(!theProduct){
        return res.status(404).send('<h1>the product was not found</h1>');
    }
    return res.json(theProduct);
});

router.get('/query',(req,res)=>{
    const {search, limit, maxPrice} = req.query;
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        });
    }
    if (limit){
        sortedProducts =  sortedProducts.slice(0, Number(limit));
    }
    if (maxPrice){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.price <= Number(maxPrice);
        });
    }
    if (sortedProducts.length<1){
        res.status(200).json('the product you tried to find does not exist');
    }
    res.status(200).json(sortedProducts);
});


module.exports = router;