import React, { useEffect, useState } from 'react'
import { useCart } from '../Components/CartContext'


function Shop() {
  const [products, setproducts] = useState([])
  const [error, setError] = useState(null)
  const [quantities, setquantities] = useState([])
  const { addToCart } = useCart();


  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()
      console.log(data)
      setproducts(data)
      //Setting every quantie as 1 
      const minQuantities = {};
      data.forEach((product) => {
        minQuantities[product.id] = 1;
      })
      setquantities(minQuantities)


    } catch(error) {
      setError(error.message)
    }
  }

  function changeQuantity(pId, a ) {
    setquantities(prev => ({
      ...prev,
      [pId] : Math.max(prev[pId]+a,1)
    }))
  }



  useEffect(() => {
    fetchProducts()
    
  },[])
  
  if (error) return <div>Error: {error}</div>


  
  return (
    <>
    {products.map((product) => (
      <div key={product.id} >
        <img 
          src={product.image} width={10}
          alt={product.title}
        />
        <h3>{product.title}</h3>
        <p >₹{product.price.toFixed(2)}</p>
        <div >
          <button onClick={() => changeQuantity(product.id, -1)} >
            -
          </button>
          <input type='number'
            value={quantities[product.id]}
            min={1}  />
          <button onClick={() => changeQuantity(product.id, 1)} >
            +
          </button>
        </div>
        <div>
          <button onClick={() => addToCart(product, quantities[product.id])} >
            Add to Cart
          </button>
        </div>

      </div>
    ))}
    </>
  )
}

export default Shop