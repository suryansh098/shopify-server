const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const { productRouter } = require('./routers/productRouter.js');
const { userRouter } = require('./routers/userRouter.js');
const { orderRouter } = require('./routers/orderRouter.js');
const { uploadRouter } = require('./routers/uploadRouter.js');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/shopify', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

const _dirname = path.resolve();
app.use('/uploads', express.static(path.join(_dirname, '/uploads')));

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