import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/users/login`, { email, password });
      alert('Login bem-sucedido!');
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      alert('Login falhou: Credenciais inválidas.');
    }
  };

  return (
    <div className="login-page">
      <header>
        <h1>Sweet Dreams</h1>
      </header>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Não tem uma conta? <Link className='linkcadastro' to="/register">Cadastre-se</Link></p>
      </div>
      <footer> 
        <img src="/rodape.jpg" alt="Rodapé" /> 
      </footer>
    </div>
  );
}

export default Login;
