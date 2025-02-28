import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function NavBar({ onCartToggle, isCartOpen }) {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      <div className="logo">ShopCart</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <button
          onClick={onCartToggle}
          className={`cart-toggle ${isCartOpen ? 'active' : ''}`}
        >
          Cart <span className="cart-count">{cartItemCount}</span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
