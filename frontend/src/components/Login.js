import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import './Main.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAnimating, setIsAnimating] = useState(false); // Estado para controlar a animação
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

  const handleRedirectToRegister = (e) => {
    e.preventDefault();

    // Inicia a animação
    setIsAnimating(true);

    // Aguarda o término da animação antes de redirecionar
    setTimeout(() => {
      navigate('/register');
    }, 750); // Deve coincidir com a duração da animação no CSS
  };

  return (
    <div>
    <div className="main-page">
      <header>
        <h1 className="main-titulo">Sweet Dreams</h1>
      </header>
      <div className={`main-container ${isAnimating ? 'rotate-out-left' : ''}`}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="main-form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="main-form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Não tem uma conta?{' '}
          <Link className="linkcadastro" onClick={handleRedirectToRegister}>
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
    <div className="space-container"></div> {/* Adicionar espaço de 5vh */}
      <footer className="main-footer">
        <img className="main-footer-img" src="/rodape.jpg" alt="Rodapé" />
      </footer>
    </div>
    
  );
}

export default Login;
