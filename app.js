const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api.js');
const cors = require('cors');

const app = express();

// Middleware libera o bloqueio de CORS
app.use(cors());

// Middleware para parse de JSON
app.use(express.json());

// Servir arquivos estáticos (imagens dos produtos)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rotas da API
app.use('/api', apiRoutes);

// Middleware global de tratamento de erros
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
