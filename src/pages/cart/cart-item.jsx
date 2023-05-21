import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop-context';
import './cart.css'

export const CartItem = (props) => {
    const {id, productName, price, productImg, category} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount} =useContext(ShopContext)
    var qty = cartItems[id];
    var total = getTotalCartAmount()
    var cost =price;
  return (
    <div id='eachCartItem'>
        <div id='cartedItems' className=''>
            {/* <div id='imgContainer'> */}
                <img id='cartImg' src={productImg}></img>
             {/* </div> */}
            
            <div>
                <p><b>{productName}</b></p>
                <p> {'\u20B9'}{cost}</p>
                {/* <p> Qty : {qty}</p> */}
                <span>Qty: </span><button className='h-8 w-8 border border-gray-700' onClick={()=>removeFromCart(id)}> - </button>
                <input id='manual' value={qty} className='w-8 border m-auto p-1 mx-1 text-center' placeholder='Qty' onChange={((e)=>updateCartItemCount(Number(e.target.value),id))}/>
                <button className='h-8 w-8 border border-gray-700 mr-8' onClick={()=>addToCart(id)}> + </button>
                
                <p> Total cost: {'\u20B9'}{qty*cost} </p>
                

            </div>
        </div>
        
    </div>

  )
}
