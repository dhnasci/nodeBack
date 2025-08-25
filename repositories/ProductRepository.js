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
        this.products.push(new Product(1, 'uploads/sample.png', 'Produto 1', 10.0, 'Descrição do produto 1'));
        this.products.push(new Product(2, 'uploads/sample2.png', 'Produto 2', 20.0, 'Descrição do produto 2'));
        this.products.push(new Product(3, 'uploads/sample3.jpg', 'Produto 3', 32.50, 'Descrição do produto 3'));
        this.products.push(new Product(4, 'uploads/sample4.png', 'Produto 4', 69.25, 'Descrição do produto 4'));
    }

    /**
     * Procura um produto pelo ID
     * @param {string|number} id 
     * @returns {Product|null}
     */
    findById(id) {
        return this.products.find(prod => prod.id === parseInt(id));
    }

    /**
     * Lista todos os produtos disponíveis
     * @returns {Product[]}
     */
    listAllProducts() {
        return this.products;
    }

}

module.exports = new ProductRepository();
