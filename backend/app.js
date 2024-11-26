const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Adicione isto
const userRoutes = require('./routes/userRoutes');
const app = express();

require('dotenv').config();

app.use(cors({
  origin: 'http://localhost:3000', // Altere para o endereço do seu frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
