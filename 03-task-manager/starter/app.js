
const express = require('express');
const app = express();
const tasks = require('./routs/tasks');
const connectDB = require('./db/connections');

const port = process.env.PORT || 3000;
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/errorHandler');
app.use(express.static('./public'));


const start = async()=>{
    try{
    await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('the server is listening port 3000'));
    } catch(err){
        console.log(err);
    }
};


app.use(express.json());
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);
start();

