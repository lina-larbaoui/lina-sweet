import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/data';
import ItemCard from '../components/ItemCard';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="home-container">
      <h1 className="welcome-title">Bienvenue chez Lina's Sweet</h1>
      
      <Link to="/cart" className="floating-cart-btn">
        🛒 Panier ({cart.length})
      </Link>

      <div className="grid">
        {products.map(product => (
          <ItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;