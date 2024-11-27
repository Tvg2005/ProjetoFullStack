import React, { useState } from 'react';
import './Home.css';
import Cart from './Cart';

const products = [
  { id: 1, name: 'Produto 1', price: 100 },
  { id: 2, name: 'Produto 2', price: 200 },
  { id: 3, name: 'Produto 3', price: 300 },
];

function Home() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // Adicione o estado para controlar a visibilidade do carrinho

  const addToCart = (product) => {
    const productInCart = cart.find(item => item.id === product.id);
    if (productInCart) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setIsCartOpen(true); // Abrir o carrinho ao adicionar um produto
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    // Tratar valores vazios ou não numéricos como zero
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
    </div>
  );
}

export default Home;






