const Product = require('../models/Product');

/**
 * Repositório para gerenciamento dos produtos
 * Simula um banco de dados em memória
 * @author Dirceu Henrique
 */
class ProductRepository {
    constructor() {
        this.products = [];
        // Produtos iniciais para teste
        this.products.push(new Product(1, 'uploads/sample.jpg', 'Produto 1', 10.0, 'Descrição do produto 1'));
        this.products.push(new Product(2, 'uploads/sample2.jpg', 'Produto 2', 20.0, 'Descrição do produto 2'));
    }

    /**
     * Procura um produto pelo ID
     * @param {string|number} id 
     * @returns {Product|null}
     */
    findById(id) {
        return this.products.find(prod => prod.id === parseInt(id));
    }
}

module.exports = new ProductRepository();
