import React from 'react';
import { useCart } from './CartContext';

const CartOverlay = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, cartTotal, cartCount } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay-backdrop" onClick={() => setIsCartOpen(false)}>
      <div className="cart-overlay" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Winkelwagen ({cartCount})</h3>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>&times;</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-msg">Je winkelwagen is nog leeg.</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <span className="item-name">{item.title || item.name}</span>
                  <span className="item-price">€{item.price?.toFixed(2)}</span>
                </div>
                <div className="item-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span className="qty">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="total">
              <span>Totaal:</span>
              <span>€{cartTotal.toFixed(2)}</span>
            </div>
            <button className="checkout-btn" onClick={() => alert('Checkout functionaliteit komt eraan!')}>
              Afrekenen
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartOverlay;
