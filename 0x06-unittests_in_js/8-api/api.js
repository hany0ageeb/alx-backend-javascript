const express = require('express');

const app = express();
const PORT_NUMBER = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.listen(PORT_NUMBER, () => {
    console.log(`API available on localhost port ${PORT_NUMBER}`);
});