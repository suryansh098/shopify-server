const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const { productRouter } = require("./routers/productRouter.js");
const { userRouter } = require("./routers/userRouter.js");
const { orderRouter } = require("./routers/orderRouter.js");

dotenv.config();

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success",
    message: "Shopify Server Online!",
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL || "mongodb://localhost/shopify", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(port, () => {
      console.log(`Server Online!!`);
    })
  )
  .catch((err) => console.log(err.message));
