import React, { useEffect, useState } from 'react';
import { useCart } from '../Components/CartContext';

function Shop() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({});
  const { addToCart } = useCart();

  async function fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      const minQuantities = {};
      data.forEach((product) => {
        minQuantities[product.id] = 1;
      });
      setQuantities(minQuantities);
    } catch (error) {
      setError(error.message);
    }
  }

  function changeQuantity(pId, delta) {
    setQuantities((prev) => ({
      ...prev,
      [pId]: Math.max(prev[pId] + delta, 1),
    }));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <div className="product-info">
            <h3>{product.title}</h3>
            <p>₹{product.price.toFixed(2)}</p>
            <div className="quantity-controls">
              <button onClick={() => changeQuantity(product.id, -1)}>-</button>
              <input
                // type="text"
                value={quantities[product.id]}
                min={1}
                readOnly
              />
              <button onClick={() => changeQuantity(product.id, 1)}>+</button>
            </div>
            <button onClick={() => addToCart(product, quantities[product.id])}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;