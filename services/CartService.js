const cartRepository = require('../repositories/CartRepository');
const productRepository = require('../repositories/ProductRepository');

/**
 * Serviço para gerenciar as ações do carrinho de compras
 * @author Dirceu Henrique
 */
class CartService {
    /**
     * Adiciona um produto ao carrinho pelo seu id
     * @param {number} productId 
     * @returns {Product}
     */
    addProductToCart(productId) {
        const product = productRepository.findById(productId);
        if (!product) {
            throw new Error('Produto não encontrado');
        }
        cartRepository.addProduct(product);
        return product;
    }

    /**
     * Retorna o carrinho com todos os produtos adicionados
     * @returns {Array}
     */
    getCart() {
        return cartRepository.getCart();
    }
}

module.exports = new CartService();
