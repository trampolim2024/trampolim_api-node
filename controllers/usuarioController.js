const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
require('dotenv').config();

exports.cadastrarUsuario = async (req, res) => {
  try {
    const { email, senha, tipo, ...outrosDados } = req.body;
    const senhaHash = await bcrypt.hash(senha, 8);

    const usuario = await Usuario.create({ ...outrosDados, email, senha: senhaHash, tipo });
    res.status(201).json({ message: 'Usuário cadastrado com sucesso', usuario });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginUsuario = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    const token = jwt.sign({ id: usuario.id, tipo: usuario.tipo }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.perfilUsuario = async (req, res) => {
    try {
      const usuarioId = req.user.id; // Acessa o ID do usuário a partir do JWT decodificado
      const usuario = await Usuario.findByPk(usuarioId); // Encontra o usuário no banco de dados usando o ID
  
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
  
      res.json({ usuario });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
