const express = require('express');
const router = express.Router();

const productController = require('../controllers/ProductController');
const cartController = require('../controllers/CartController');
const upload = require('../middlewares/upload.js');

// Endpoint para obter detalhes de um produto pelo id
router.get('/products/:id', productController.getProductById);

// Endpoint para adicionar um produto ao carrinho
router.post('/cart/add', cartController.addProduct);

// Endpoint para listar os produtos presentes no carrinho
router.get('/cart', cartController.getCart);

module.exports = router;
