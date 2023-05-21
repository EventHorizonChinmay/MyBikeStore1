import React, { useContext } from 'react'
import {ShopContext} from '../../context/Shop-context'
import { PRODUCTS } from '../../Products'
import { CartItem } from './cart-item'
import { Link } from 'react-router-dom'
import './cart.css'
export const Cart = () => {
  
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)

  return (
    <div id='cart-stuff'>

      <div>
        <h1> Your Cart Items</h1>
      </div>
      
      <div id='CartItems'>
        <div className='text-lg '> <b> Total : {'\u20B9'}{getTotalCartAmount()}  </b></div>
        <div>
        <div id='shop-checkout'> 
      { getTotalCartAmount()>0 &&
      <div> <Link to={'/checkOut'} className={ 'm-1 p-1 border border-blue-300 rounded-md'}> Checkout</Link>
         <Link to={'/'} className='m-1 p-1 border border-blue-300 rounded-md'> Shop for more</Link>
      </div>
      }

      {getTotalCartAmount()<=0 &&
      <div>
      <h2 className='mb-5'> You might want to add stuff to your cart first</h2>
      
      <Link to={'/'} className='m-1 p-1 border border-blue-300 rounded-md'> Back to shopping</Link>
      </div>
      } 

      </div>
          {PRODUCTS.map((prodProp)=> {
            console.log(cartItems)
            if (cartItems[prodProp.id]>0){
              return <div> 
                <div> <CartItem data={prodProp}/> </div>
              </div>
            }
          })}
        </div>
      </div>


      
    </div>
  )
}
