const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  nomeCompleto: DataTypes.STRING,
  dataNascimento: DataTypes.DATE,
  escolaridade: DataTypes.STRING,
  areaAtuacao: DataTypes.STRING,
  genero: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  senha: DataTypes.STRING,
  cpf: DataTypes.STRING,
  telefone: DataTypes.STRING,
  cep: DataTypes.STRING,
  estado: DataTypes.STRING,
  cidade: DataTypes.STRING,
  bairro: DataTypes.STRING,
  endereco: DataTypes.STRING,
  linkedin: DataTypes.STRING,
  instagram: DataTypes.STRING,
  facebook: DataTypes.STRING,
  tipo: DataTypes.ENUM('avaliador', 'empreendedor'),
  miniCurriculo: DataTypes.TEXT, // Exclusivo para empreendedor
  monitorouStartup: DataTypes.BOOLEAN, // Exclusivo para avaliador
  descricaoIncubacao: DataTypes.TEXT, // Exclusivo para avaliador
});

module.exports = Usuario;
