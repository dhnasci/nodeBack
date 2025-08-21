## Backend em node.js e typescript

Este é um backend simples de teste para uma loja, feito em Node.js (versão 20+), utilizando a estrutura MVC, princípios SOLID e armazenamento de dados em memória.

**Pré-requisitos**

[Node.js 20 ou superior](https://nodejs.org)

[npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/).

**Instalação**
1. Baixe e extraia o conteúdo deste repositório.
2. Navegue até a pasta do projeto e instale as dependências:

`npm install express multer`

**Execute o servidor**

`node server.js`

A aplicação irá rodar em http://localhost:3000

### **Estrutura dos Endpoints**

#### Produtos

* **GET /api/products/:id**

  * Retorna os dados de um produto pelo seu ID.
  * Exemplo de resposta:

```json 
{
    "id": 1,
    "foto": "uploads/sample.jpg",
    "nome": "Produto 1",
    "preco": 10.0,
    "descricao": "Descrição do produto 1"
}
```

#### Carrinho

* **POST /api/cart/add**

  * Adiciona um produto ao carrinho.
  * Body esperado (JSON):

```json 
{
    "productId": 1
}
```

* **GET /api/cart**

  * Retorna todos os produtos adicionados ao carrinho.

### Estrutura de Pastas

```text
controllers/
  CartController.js
  ProductController.js
middlewares/
  upload.js
models/
  Cart.js
  Product.js
repositories/
  CartRepository.js
  ProductRepository.js
routes/
  api.js
services/
  CartService.js
  ProductService.js
uploads/
  (aqui ficarão as imagens de produtos)
server.js
app.js
```
### Observações

* O sistema utiliza uma estrutura in-memory para produtos e carrinho (os dados se perdem ao reiniciar o servidor).
* Para testar imagens, coloque arquivos em uploads/ com os nomes indicados nos produtos de exemplo.
* Os endpoints estão prontos para evoluir e o padrão SOLID facilita a manutenção/expansão do código.
