const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar se o usuário já existe
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar um novo usuário
    user = new User({ email, password: hashedPassword });

    // Salvar o usuário no banco de dados
    await user.save();

    res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar se o usuário existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Verificar a senha
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gerar um token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};
