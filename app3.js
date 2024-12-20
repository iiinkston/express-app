const express = require('express');
const app = express();

// Import the product data
const products = require('./data');

// Middleware for JSON parsing
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

// Products Route
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});

// Product by ID Route
app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;

    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    );

    if (!singleProduct) {
        return res.status(404).send('Product does not exist');
    }

    return res.json(singleProduct);
});

// Product Review Route
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    const { productID, reviewID } = req.params;
    res.send(`Product ID: ${productID}, Review ID: ${reviewID}`);
});

// Start the Server
app.listen(5001, () => {
    console.log('Server is listening on port 5001.......');
});
