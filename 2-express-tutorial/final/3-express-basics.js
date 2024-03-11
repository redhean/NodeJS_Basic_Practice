const express = require('express');
const app = express();

// app.get
app.get('/', (req, res) => {
    console.log('user hit the resource');
    res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
    res.status(200).send('About Page');
});

// app.all
app.all('*', (req, res) => {
    res.status(404).send('<h1> resource not found </h1>');
});

// app.listen
app.listen(5001, () => {
    console.log('server is listening on port 5001...');
});

// app.post
// app.put
// app.delete
// app.use