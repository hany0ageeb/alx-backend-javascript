const express = require('express');

const PORT_NUMBER = 7865;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
    res.send(`Payment methods for cart ${req.params['id']}`);
});

app.get('/available_payments', (req, res) => {
    res.json({
        payment_methods:{
            credit_cards: true,
            paypal: false,
        }
    });
});

app.post('/login', (req, res) => {
    const username = req.body.userName;
    res.end(`Welcome ${username}`);
});

app.listen(PORT_NUMBER, () => {
    console.log(`API available on localhost port ${PORT_NUMBER}`);
});