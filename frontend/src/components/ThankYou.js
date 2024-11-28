import React from 'react';
import './ThankYou.css';

function ThankYou() {
  return (
    <div className='typage'>
    <div className="bodycontainer">
      <header>
        <h1 className='main-titulo'>Sweet Dreams</h1>
      </header>
      <div className="thankyou-container">
        <h1>Obrigado pela sua compra!</h1>
        <p>Agradecemos pela confiança. Seu pedido foi processado com sucesso.</p>
        <a href="/">Voltar à Página Inicial</a>
      </div>
    </div>
    </div>
  );
}

export default ThankYou;
