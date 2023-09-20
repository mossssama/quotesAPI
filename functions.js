const quotes = require('./quotes');

// Function to paginate the quotes array
function paginateQuotes(page, pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return quotes.slice(startIndex, endIndex);
}


module.exports = paginateQuotes;