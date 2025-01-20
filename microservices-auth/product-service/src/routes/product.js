// product-service/src/routes/products.js
const express = require('express');
const Product = require('../models/product');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.use(authMiddleware);

router.post('/', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const product = new Product({
      name,
      price,
      description,
      createdBy: req.user.userId
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;