const express = require('express');
const mongoose = require('mongoose');
const { productRouter } = require('./routers/productRouter.js');
const { userRouter } = require('./routers/userRouter.js');

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/shopify', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});


app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send("Server is working");
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`);
});