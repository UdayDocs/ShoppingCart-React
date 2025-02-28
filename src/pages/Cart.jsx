import { useCart } from '../Components/CartContext';

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart ({cart.length} items)</h2>
      {cart.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} width="50" />
          <h4>{item.title}</h4>
          <p>{item.quantity} x ₹{item.price.toFixed(2)}</p>
          <p>Total:{" "} ${(item.price * item.quantity).toFixed(2)}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
          <button>Checkout</button>
        </div>
      ))}
    </div>
  );
}

export default Cart