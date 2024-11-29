import React, { useState } from 'react';
import './Home.css';
import Cart from './Cart';

const products = [
  { id: 1, name: 'Waffles com morango(x3)', price: 40, image: 'produtos/product1.jpg' },
  { id: 2, name: 'Torta de morango com mirtilos', price: 70, image: 'produtos/product2.jpg' },
  { id: 3, name: 'Docinhos variados(x50)', price: 80, image: 'produtos/product3.jpg' },
  { id: 4, name: 'Torta Sweet Dream', price: 90, image: 'produtos/product4.jpg' },
  { id: 5, name: 'Brownie com sorvete', price: 30, image: 'produtos/product5.jpg' },
  { id: 6, name: 'Sorvete no copo com Marshamllow', price: 50, image: 'produtos/product6.jpg' },
  { id: 7, name: 'Tartelete de frutas vermelhas(x4)', price: 60, image: 'produtos/product7.jpg' },
  { id: 8, name: 'Brownie com M&M', price: 20, image: 'produtos/product8.jpg' },
  { id: 9, name: 'Milk Shake de morango com M&M', price: 35, image: 'produtos/product9.jpg' },
  { id: 10, name: 'Cheesecake de morango', price: 30, image: 'produtos/product10.jpg' },
  { id: 11, name: 'Torta de chocolate trufado', price: 55, image: 'produtos/product11.jpg' },
  { id: 12, name: 'Donuts variados', price: 15, image: 'produtos/product12.jpg' },
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
            {product.image && <img src={product.image} alt={product.name} className="product-image" />}
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
