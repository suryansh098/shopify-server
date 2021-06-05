const express = require('express');
const {data} = require('./data');

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/', (req, res) => {
    res.send("Server is working");
});

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`);
});