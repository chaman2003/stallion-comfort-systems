const express = require('express');
const router = express.Router();
const { getProducts, addProduct, deleteProduct, getProductHierarchy } = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getProducts).post(protect, admin, addProduct);
router.route('/hierarchy').get(getProductHierarchy);
router.route('/:id').delete(protect, admin, deleteProduct);

module.exports = router;
