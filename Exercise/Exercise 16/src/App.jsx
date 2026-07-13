
import React , {useState} from 'react'
import CartContext from './CartContext';
import { ProductItem } from './ProductItem';
import { CartSummary } from './ CartSummary';

export const App = () => {

  const [ cartItems , setCartItems ] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item])
  }

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId))
  }

  const value = { cartItems , addToCart , removeFromCart }

  return (

    <CartContext.Provider value={value}>
    
    <ProductItem itemId={1} itemName="widget" price={19.99} />

    <ProductItem itemId={2} itemName="gadget" price={19.99} />
  
    <CartSummary />

    </CartContext.Provider>

  )
}
