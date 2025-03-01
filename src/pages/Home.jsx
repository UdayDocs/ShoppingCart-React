import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to ShopingCart</h1>
      <p>Discover our wide range of products and start shopping today!</p>
      <Link to="/shop">Go to Shop</Link>

    </div>
  );
}

export default Home;