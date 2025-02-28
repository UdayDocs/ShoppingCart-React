import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from 'react';

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import NavBar from "./Components/NavBar";
import { CartProvider } from "./Components/CartContext";


function App() {
  return (
    <CartProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
    </CartProvider>

  )
}

export default App