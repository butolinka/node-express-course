
const express = require('express');
const app = express();
const tasks = require('./routs/tasks');
const connectDB = require('./db/connections');
const port =3000;
require('dotenv').config();

const start = async()=>{
    try{
    await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log('the server is listening port 3000'));
    } catch(err){
        console.log(err);
    }
};
start();
app.use(express.json());
app.use('/api/v1/tasks', tasks);