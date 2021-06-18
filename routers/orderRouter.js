const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const { Order } = require('../models/orderModel.js');
const { isAuth } = require('../utils.js');

const orderRouter = express.Router();

orderRouter.post(
  '/', 
  isAuth,
  expressAsyncHandler(async(req, res) => {
    if(req.body.orderItems.length === 0) {
      res.status(400).send({ message: 'Cart is empty '});
    } else {
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });

      const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: 'New Order Placed', order: createdOrder });
    }
  })
);

orderRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async(req, res) => {
    const order = await Order.findById(req.params.id);
    if(order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found'});
    }
  }) 
);

exports.orderRouter = orderRouter;