import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import NavBar from './Components/NavBar';
import { CartProvider } from './Components/CartContext';
import Footer from './Components/Footer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add('cart-open');
    } else {
      document.body.classList.remove('cart-open');
    }
  }, [isCartOpen]);


  return (
    <CartProvider>
      <Router>
      <NavBar
          onCartToggle={() => setIsCartOpen(!isCartOpen)}
          isCartOpen={isCartOpen} // Pass isCartOpen if you want to style the toggle button
        />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart isOpen={isCartOpen} />} />
        </Routes>
      </Router>
      <Footer/>
    </CartProvider>
  );
}

export default App;