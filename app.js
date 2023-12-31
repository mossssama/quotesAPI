const express = require('express');
const app = express();
const quotes = require('./quotes');
const paginateQuotes = require('./functions');
const PORT = process.env.PORT || 3000;

/* Get Random Quote */
app.get('/randomQuote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).json(randomQuote);
});

/* Get Quote using ID */
app.get('/quote/:id', (req, res) => {
    const quoteId = parseInt(req.params.id);
    const quote = quotes.find(q => q.id == quoteId);

    if (!quote)    res.status(404).json({ message: "Quote not found" });
    else           res.status(200).json(quote);
    
});

/* Get Quote using ID as String */
app.get('/stringQuote/:id', (req, res) => {
    const quoteId = parseInt(req.params.id);
    const quote = quotes.find(q => q.id == quoteId);

    if (!quote)     res.status(404).json({ message: "Quote not found" });
    else {
        const { text, author } = quote;
        res.status(200).send(`${text} \n\n\n { ${author} }`);
    }
});

/* Get All Quotes */
app.get('/allQuotes', (req, res) => {
    res.status(200).json(quotes);
});

/* Get Quotes Page */
app.get('/quotesPage', (req, res) => {
    const page = parseInt(req.query.page) || 1; 
    const pageSize = parseInt(req.query.pageSize) || 10;

    const paginatedQuotes = paginateQuotes(page, pageSize);

    res.status(200).json(paginatedQuotes);
});


app.listen(PORT, () => {
    console.log('Server is running in localhost on port 3000');
});
