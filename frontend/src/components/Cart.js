import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart({ cart, removeFromCart, updateQuantity, getTotalPrice, isOpen, setIsOpen }) {
  const navigate = useNavigate(); // Use o hook useNavigate

  const handleCheckout = () => {
    // Limpar o carrinho e redirecionar para a página de agradecimento
    // (Aqui pode-se adicionar lógica adicional, como enviar os detalhes da compra para o backend)
    setIsOpen(false);
    navigate('/thank-you');
  };

  return (
    <div className={`cart ${isOpen ? 'open' : ''}`}>
      <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'X' : 'Abrir Carrinho'}
      </button>
      {isOpen && (
        <div className="cart-content">
          <h2>Carrinho de Compras</h2>
          {cart.length === 0 ? (
            <p>O carrinho está vazio</p>
          ) : (
            <ul>
              {cart.map(item => (
                <li key={item.id}>
                  {item.name} - R$ {item.price} x 
                  <input
                    type="number"
                    value={item.quantity}
                    min="0"
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                  <button onClick={() => removeFromCart(item.id)}>Remover</button>
                </li>
              ))}
            </ul>
          )}
          <div className="total">
            Total: R$ {getTotalPrice()}
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Prosseguir com a Compra
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
