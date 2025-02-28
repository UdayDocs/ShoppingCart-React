import React from 'react'
import { Link } from "react-router-dom"
import { useCart } from './CartContext';

function NavBar() {
  const { cart } = useCart();

  return (
    <nav > 
        <div> FreshCart</div>
    <>
      <Link to="/" >
        Home
      </Link>
      <Link to="/shop" >
        Shop
      </Link>
      <Link to="/cart" >
      Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
      </Link>
    </>
  </nav>

    )
}

export default NavBar