// product-service/src/middleware/auth.js
const axios = require('axios');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const response = await axios.post(
      `${process.env.AUTH_SERVICE_URL}/auth/verify`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    req.user = response.data;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
