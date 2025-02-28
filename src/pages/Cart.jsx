import { useCart } from '../Components/CartContext';

function Cart({ isOpen }) {
  const { cart, removeFromCart } = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : 'hidden'}`}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-info">
                <h4>{item.title}</h4>
                <p>{item.quantity} x ₹{item.price.toFixed(2)}</p>
                <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <span
                className="remove-icon"
                onClick={() => removeFromCart(item.id)}
              >
                ×
              </span>
            </div>
          ))}
          <div className="checkout-section">
            <div className="total-price">Total: ₹{totalPrice.toFixed(2)}</div>
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;