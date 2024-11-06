const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middlewares/authMiddleware'); // Importa o middleware de autenticação

// Rota pública para cadastro de usuário
router.post('/cadastrar', usuarioController.cadastrarUsuario);

// Rota pública para login de usuário
router.post('/login', usuarioController.loginUsuario);

// Rota protegida para visualizar o painel do usuário
router.get('/painel', authMiddleware, usuarioController.perfilUsuario);

module.exports = router;
