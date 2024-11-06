const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');
const sequelize = require('./config/database');

const app = express();

app.use(express.json()); // Para o Express entender o JSON no corpo da requisição
app.use('/usuarios', usuarioRoutes); // Prefixa as rotas com '/usuarios'

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});
