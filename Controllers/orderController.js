import Order from "../models/order.js";

export const createOrder = async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.body;
  const order = await Order.create({ user: userId, product: productId });
  res.status(201).json(order);
};

export const getOrders = async (req, res) => {
  if (req.user.role === "customer") {
    const orders = await Order.find({ user: req.user.id }).populate("product");
    return res.json(orders);
  } else {
    const orders = await Order.find().populate("user").populate("product");
    return res.json(orders);
  }
};
