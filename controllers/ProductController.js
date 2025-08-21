const productService = require('../services/ProductService');

/**
 * Controlador para gestão de produtos
 * @author Dirceu Henrique
 */
class ProductController {
    /**
     * Retorna os detalhes de um produto pelo ID
     * @param {Request} req 
     * @param {Response} res 
     */
    async getProductById(req, res) {
        try {
            const product = productService.getProductById(req.params.id);
            return res.json(product);
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}

module.exports = new ProductController();
