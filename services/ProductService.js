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

    /**
     * Lista todos os produtos cadastrados
     * @returns {Product[]}
     */
    listaAll()  {
        const produtcs = productRepository.listAllProducts();
        if (!produtcs) {
            throw new Error('Produtos não cadastrados');
        }
        return produtcs;
    }
}

module.exports = new ProductService();
