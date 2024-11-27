import React from 'react';
import './Cart.css';

function Cart({ cart, removeFromCart, updateQuantity, getTotalPrice, isOpen, setIsOpen }) {
  return (
    <div className={`cart ${isOpen ? 'open' : ''}`}>
      <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Fechar Carrinho' : 'Abrir Carrinho'}
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
                    min="1"
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
          <button className="checkout-button">Prosseguir com a Compra</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
