import React, { useState } from 'react'
import { PRODUCTS } from '../../Products'
import { Product } from './Product'
import "./Shop.css"
export const Shop = () => {
  const [searchInput, setSearchInput] =useState('');
  var filteredProducts = {}
  const [filteredProducts1, setFilteredProducts] = useState()
  async function handleChange(){
    var input= document.getElementById('searchbar').value
    setSearchInput(input)
  if(searchInput.length>0){
    setFilteredProducts( PRODUCTS.filter((product)=> product.productName.includes(searchInput) || product.category.includes(searchInput)));
    }
  setFilteredProducts(filteredProducts)
   }
  return (
    <div id='shop' >
      <h1 className='m-auto'><b>Products in stock</b></h1>
      <div>
        <input type='String' placeholder='Search' id='searchbar' className={'p-1'} ></input> 
        <span><button onClick={handleChange}> Search</button></span>
      </div>

        <div id='shop-products' >
        {console.log(filteredProducts1.map((prodProp)=> ( <Product data={prodProp}/>)), filteredProducts,(searchInput))}
        </div>       
    </div>
  )
}
