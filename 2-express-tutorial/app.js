const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false}));
// parse json
app.use(express.json());

app.use('/api/people', people);  // base path
app.use('/login', auth);

app.listen(5001, () => {
    console.log('Server is instening on port 5001..');
});
