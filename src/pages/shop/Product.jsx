//UI for each product to be displayed in the shop
import './Product.css'
import React, { useContext } from 'react'
import {ShopContext} from '../../context/Shop-context'


export const Product = (props) => {
    const {id, productName, price, productImg, category} = props.data;
    const containerCSS = 'mb-5 m-auto w-full items-center '
    const {cartItems, addToCart} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
  return(
    <div id='product-box' className='m-2 my-5 min-h-fit border border-gray-0 shadow-xl rounded-md '>
        <div id='products' className=' p-4 w-full h-full'> 
            <div id='' className='min-h-fit'>
                <div id='image-container' className={containerCSS}>
                    <img className='m-auto items-center ' src={productImg}/>
                </div>
                <div id='Description' className='m-auto'>
                    <p className='m-auto'><b>{productName}</b></p>
                    <div id='price-button' className='m-auto w-60 flex justify-between items-center'>
                        <h3> {'\u20B9'} {price}/-</h3> 
                        <button id='btn' className='border border-blue-800 w-36 h-8 '  onClick={()=>addToCart(id)}> Add to Cart {cartItems[id]>0 &&'(' +cartItems[id]+')'} </button>
                    </div>
                </div>
                    <br></br>
            </div>
            
        </div> {/* products */}
    </div>
  )
}
