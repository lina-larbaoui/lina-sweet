import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <div className="item-card">
      <img 
        src={product.image} 
        alt={product.name} 
        onClick={() => navigate(`/product/${product.id}`)} 
      />
      <h3>{product.name}</h3>
      <p>{product.price} DA</p>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
        className="add-to-cart-btn"
      >
        Ajouter au panier
      </button>
    </div>
  );
};

export default ItemCard;