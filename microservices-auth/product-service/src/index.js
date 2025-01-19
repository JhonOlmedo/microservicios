// product-service/src/index.js
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');

const app = express();
app.use(express.json());
app.use('/products', productRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Product service running on port ${PORT}`));