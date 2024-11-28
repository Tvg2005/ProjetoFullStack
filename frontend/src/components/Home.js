import React, { useState } from 'react';
import './Home.css';
import Cart from './Cart';

const products = [
  { id: 1, name: 'Produto 1', price: 100 },
  { id: 2, name: 'Produto 2', price: 200 },
  { id: 3, name: 'Produto 3', price: 300 },
  { id: 4, name: 'Produto 4', price: 150 },
  { id: 5, name: 'Produto 5', price: 80 },
  { id: 6, name: 'Produto 6', price: 30 },
  { id: 7, name: 'Produto 7', price: 150 },
  { id: 8, name: 'Produto 8', price: 80 },
  { id: 9, name: 'Produto 9', price: 30 },
  { id: 10, name: 'Produto 10', price: 150 },
  { id: 11, name: 'Produto 11', price: 80 },
  { id: 12, name: 'Produto 12', price: 30 },
];

function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const productInCart = cart.find(item => item.id === product.id);
    if (productInCart) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (!quantity || isNaN(quantity)) {
      quantity = 0;
    }
    setCart(cart.map(item => item.id === productId ? { ...item, quantity } : item));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={`home-container ${isCartOpen ? 'cart-open' : ''}`}>
      <header>
        <h1 className='main-titulo'>Sweet Dreams</h1>
      </header>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>Preço: R$ {product.price}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
      <Cart
        cart={cart}
        isOpen={isCartOpen}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        getTotalPrice={getTotalPrice}
        setIsOpen={setIsCartOpen}
      />
      <footer className={`main-footer ${isCartOpen ? 'cart-open' : ''}`}> 
        <img className='main-footer-img' src="/rodape.jpg" alt="Rodapé" /> 
      </footer>
    </div>
  );
}

export default Home;