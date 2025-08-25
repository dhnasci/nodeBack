/**
 * Repositório para gerenciamento do carrinho de compras
 * Utiliza armazenamento em memória simples
 * @author Dirceu Henrique
 */
class CartRepository {
    constructor() {
        this.cart = [];
    }

    /**
     * Adiciona um produto ao carrinho
     * @param {Product} product 
     */
    addProduct(product) {
        this.cart.push(product);
    }

    /**
     * Retorna todos os produtos do carrinho
     * @returns {Product[]}
     */
    getCart() {
        return this.cart;
    }
}

module.exports = new CartRepository();
