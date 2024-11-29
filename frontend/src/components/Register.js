import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAnimating, setIsAnimating] = useState(false); // Estado para controlar a animação
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, { email, password });
      alert('Cadastro realizado com sucesso!');
      navigate('/login');
    } catch (error) {
      alert('Erro ao realizar cadastro');
    }
  };

  const handleRedirectToLogin = (e) => {
    e.preventDefault();

    // Inicia a animação
    setIsAnimating(true);

    // Aguarda o término da animação antes de redirecionar
    setTimeout(() => {
      navigate('/login');
    }, 750); // Deve coincidir com a duração da animação no CSS
  };

  return (
    <div>
    <div className="main-page">
      <header>
        <h1 className="main-titulo">Sweet Dreams</h1>
      </header>
      <div className={`main-container ${isAnimating ? 'rotate-out-right' : ''}`}>
        <h2>Cadastro</h2>
        <form onSubmit={handleRegister}>
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
          <button type="submit">Cadastrar</button>
        </form>
        <p>
          Obrigado pela preferência!{' '}
          <Link className="linkregister" onClick={handleRedirectToLogin}>
            Login
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
};

export default Register;
