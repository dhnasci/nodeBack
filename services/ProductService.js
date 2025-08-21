const productRepository = require('../repositories/ProductRepository');

/**
 * Serviço para regras de negócio relacionadas a produtos
 * @author Dirceu Henriqeu
 */
class ProductService {
    /**
     * Retorna um produto pelo id
     * @param {string|number} id 
     * @returns {Product}
     */
    getProductById(id) {
        const product = productRepository.findById(id);
        if (!product) {
            throw new Error('Produto não encontrado');
        }
        return product;
    }
}

module.exports = new ProductService();
