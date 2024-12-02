const express = require('express');

const app = express();
const PORT_NUMBER = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
    res.send(`Payment methods for cart ${req.params['id']}`);
});

app.listen(PORT_NUMBER, () => {
    console.log(`API available on localhost port ${PORT_NUMBER}`);
});