/**
 * Produto da loja
 * @author Dirceu Henrique
 */
class Product {
    /**
     * Cria uma instância de Produto
     * @param {number} id
     * @param {string} foto - Caminho da imagem do produto
     * @param {string} nome
     * @param {number} preco
     * @param {string} descricao
     */
    constructor(id, foto, nome, preco, descricao) {
        this.id = id;
        this.foto = foto;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
}

module.exports = Product;
