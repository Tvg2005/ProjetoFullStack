import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import ThankYou from './components/ThankYou'; // Importe o componente ThankYou
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/thank-you" element={<ThankYou />} /> {/* Adicione a rota para ThankYou */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
