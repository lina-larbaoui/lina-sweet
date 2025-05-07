import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { 
    cart, 
    increaseQuantity, 
    decreaseQuantity, 
    removeFromCart, 
    clearCart 
  } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <h2>Votre Panier</h2>
      
      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.price} DA × {item.quantity}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Retirer
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-actions">
            <button onClick={clearCart} className="clear-btn">
              Vider le panier
            </button>
            <div className="cart-total">
              Total: <strong>{total} DA</strong>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;