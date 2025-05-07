import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../data/data';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);

  useEffect(() => {
    const prod = productsData.find(p => p.id === parseInt(id));
    if (prod) {
      setProduct(prod);
    }
  }, [id]);

  const handleClose = () => navigate(-1);

  if (!product) return null;

  return (
    <div className="product-detail-container" onClick={handleClose}>
      <div className="product-detail-content" onClick={e => e.stopPropagation()}>
        <button onClick={handleClose} className="close-btn">×</button>

        <div className="product-detail-flex">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h2>{product.name}</h2>
            <p className="price">{product.price} DA</p>

            <button 
              onClick={() => addToCart(product)}
              className="add-to-cart-btn"
            >
              Ajouter au panier
            </button>

            <div className="reviews">
              <h3>Commentaires ⭐</h3>
              {(product.reviews || []).map((r, i) => (
                <p key={i}>⭐ {r.rating} - {r.comment}</p>
              ))}
              <div className="new-review">
                <input 
                  value={comment} 
                  onChange={e => setComment(e.target.value)} 
                  placeholder="Votre avis..." 
                />
                <select 
                  value={rating} 
                  onChange={e => setRating(Number(e.target.value))}
                >
                  {[5, 4, 3, 2, 1].map(r => (
                    <option key={r} value={r}>{r} ⭐</option>
                  ))}
                </select>
                <button onClick={() => {
                  if (comment.trim()) {
                    setProduct(prev => ({
                      ...prev,
                      reviews: [...(prev.reviews || []), { comment, rating }]
                    }));
                    setComment('');
                  }
                }}>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
