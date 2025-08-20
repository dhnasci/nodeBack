// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain; charset=utf-8');
//     res.end('Olá, Node.js!');
// });
// server.listen(3000, () => {
//     console.log('Servidor rodando em http://localhost:3000O');
// });

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Olá, Express!'));

app.listen(3000, () => console.log('http://localhost:3000'));