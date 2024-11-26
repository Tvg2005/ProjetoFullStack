import React, { useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/users/login`, { email, password });
      alert('Login bem-sucedido!');
      // Você pode salvar o token JWT em localStorage ou context state, conforme necessário.
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      alert('Login falhou: Credenciais inválidas.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        </div>
        <div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
