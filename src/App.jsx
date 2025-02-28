import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import NavBar from './Components/NavBar';
import { CartProvider } from './Components/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <NavBar onCartToggle={() => setIsCartOpen(!isCartOpen)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart isOpen={isCartOpen} />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;