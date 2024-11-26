import React from 'react';

function Home() {
  const products = [
    { id: 1, name: 'Produto 1', price: 'R$ 99,90' },
    { id: 2, name: 'Produto 2', price: 'R$ 199,90' },
    { id: 3, name: 'Produto 3', price: 'R$ 299,90' },
  ];

  return (
    <div className="container">
      <h2>Produtos</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Adicionar ao carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
