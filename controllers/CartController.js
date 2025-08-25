const cartService = require('../services/CartService');

/**
 * Controlador para gestão do carrinho de compras
 * @author Dirceu Henrique
 */
class CartController {
    /**
     * Adiciona um produto ao carrinho
     * Espera { productId: number } no corpo da requisição
     * @param {Request} req 
     * @param {Response} res 
     */
    async addProduct(req, res) {
        try {
            const { productId } = req.body;
            const product = cartService.addProductToCart(productId);
            return res.json({ message: 'Produto adicionado ao carrinho', product });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    /**
     * Retorna os produtos presentes no carrinho
     * @param {Request} req 
     * @param {Response} res 
     */
    async getCart(req, res) {
        try {
            const cart = cartService.getCart();
            return res.json(cart);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    /**
     * Remove um produto ao carrinho
     * Espera { productId: number } no corpo da requisição
     * @param {Request} req
     * @param {Response} res
     */
    async deleteCart(req, res) {
        try {
            const { productId } = req.body;
            const cart = cartService.removeProductFromCart(productId)
            return res.json({message: 'Produto removido do carrinho com sucesso', cart})
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}

module.exports = new CartController();
