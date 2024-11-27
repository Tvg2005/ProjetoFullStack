import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, { email, password });
      alert('Cadastro realizado com sucesso!');
      navigate('/login')
    } catch (error) {
      alert('Erro ao realizar cadastro');
    }
  };

  

  return (
    <div className='register-page'>
      <header>
        <h1>Sweet Dreams</h1>
      </header>
      <div className="register-container">
        <h2>Cadastro</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
        <p>Obrigado pela preferência! <Link className='linkregister' to="/login">Login</Link></p>
        <footer> 
          <img src="/rodape.jpg" alt="Rodapé" /> 
        </footer>
      </div>
    </div>
  );
};

export default Register;
