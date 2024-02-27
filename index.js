const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin:'*'//www.localhost:8000/api/create-post
}));

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/FullstackApp");

const post_route = require('./Routes/postroute');
app.use('/api',post_route);

app.listen(8000,function(){
    console.log('Server is running');
});