const express = require('express');
const app = express();
const quotes = require('./quotes'); 
const PORT = process.env.PORT || 3000;

app.get('/randomQuote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).json(randomQuote);
});

app.get('/allQuotes', (req, res) => {
    res.status(200).json(quotes);
});

app.listen(PORT, () => {
    console.log('Server is running in localHost port 3000');
});
