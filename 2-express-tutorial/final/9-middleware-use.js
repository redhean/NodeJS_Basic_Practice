const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

// req => middleware => res
// 1. use vs route
// 2. options - our own / express / third party

//app.use('/api', logger); // -> /api이후의 route가 나옴
// api/home/about/products

//app.use([logger, authorize]);

app.get('/', logger ,(req, res) => {
    res.send('Home');
});

app.get('/about', logger, (req, res) => {
    res.send('About');
});

app.get('/api/products', logger, (req, res) => {
    res.send('Products');
});

app.get('/api/items', [logger, authorize], (req, res) => {
    console.log(req.user);
    res.send('Items');
});

app.listen(5001, () => {
    console.log('Server is instening on port 5001..');
});
