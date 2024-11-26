import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const handleRegister = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${API_URL}/users/register`, { email, password });
    console.log('Usuário cadastrado com sucesso:', response.data);
  } catch (error) {
    console.error('Erro ao tentar realizar cadastro:', error);
  }
};
