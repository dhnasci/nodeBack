/**
 * Repositório para gerenciamento do carrinho de compras
 * Utiliza armazenamento em memória simples
 * @author Dirceu Henrique
 */
class CartRepository {
    constructor() {
        // cart é um array de objetos { product, quantity }
        this.cart = [];
    }

    /**
     * Adiciona um produto ao carrinho
     * Se já existir, incrementa a quantidade.
     * @param {Product} product 
     */
    addProduct(product) {
        const item = this.cart.find(item => item.product.id === product.id);
        if (item) {
            item.quantity += 1;
        } else {
            this.cart.push({ product, quantity: 1 });
        }
    }

    /**
     * Retorna todos os itens do carrinho
     * @returns {{product: Product, quantity: number}[]}
     */
    getCart() {
        return this.cart;
    }
}

module.exports = new CartRepository();
