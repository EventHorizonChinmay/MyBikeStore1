import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Products';


export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart={}
    for (let i=1; i<PRODUCTS.length+1; i++){
        cart[i]=0
    }
    return cart
    
}
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart =(itemId)=>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] +1}))
    }
    const removeFromCart =(itemId)=>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] -1}))
    }
    
    const updateCartItemCount = (newAmount, itemId)=>{
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const getTotalCartAmount =() =>{    
        var totalAmount = 0;
        for (var item in cartItems){
            if (cartItems[item]>0){
                console.log(item , cartItems[item])
                var temp = PRODUCTS.find((prod)=>prod.id===Number(item))   
                totalAmount += cartItems[item]*temp.price

           } 
        }
   return totalAmount
}
    const contextValue={cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount};

    // console.log("Here you go"+ cartItems[0]+ cartItems[1]+ cartItems[2])
    return (
    <ShopContext.Provider value={contextValue}> {props.children}</ShopContext.Provider>
  )
}
