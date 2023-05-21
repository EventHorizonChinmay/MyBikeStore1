import React, { useEffect, useState } from 'react'
import { PRODUCTS } from '../../Products'
import { Product } from './Product'
import "./Shop.css"

export const Shop = () => {
  const [searchInput, setSearchInput] =useState('');
  var filteredProducts = [{}]
  const [filteredProducts1, setFilteredProducts] = useState()
  useEffect(() => {
    handleChange();
  }, []);

  async function handleChange(){
    var input= document.getElementById('searchbar').value
    setSearchInput(input)

    if(searchInput.length>0){
      filteredProducts =   PRODUCTS.filter((product)=> product.productName.toLowerCase().includes(searchInput.toLowerCase()) ||product.category.toLowerCase().includes(searchInput.toLowerCase()))
      setFilteredProducts(filteredProducts)
      console.log('filteredProducts',filteredProducts)
    }
    else{
      setFilteredProducts(PRODUCTS)
    }
       }
  return (
    <div id='shop' > 
    {/* <h1>List of Products</h1> */}
     <div>
        
        <div id='input-updates'>
        <input type='String' placeholder='Search' id='searchbar' className={'p-1'} ></input> 
        
        <span><button id='searchBtn' onClick={handleChange}> Search</button></span><br/> <span id={searchInput.length>0? 'NoOfAvailableProd' : 'NoOfAvailableProd0'} className=''>{searchInput.length>0 ? '('+ filteredProducts1.length + ' results found)' : '('+PRODUCTS.length+' items are there in inventory)'} </span></div>
      </div>
         <div id='shop-products' > 
         {filteredProducts1 && filteredProducts1.map((prodProp)=> ( <Product data={prodProp}/>))}  
         </div> 
    </div>  )
}




// import React, { useState } from 'react'
// import { PRODUCTS } from '../../Products'
// import { Product } from './Product'
// import "./Shop.css"
// export const Shop = () => {
//   // var c ='';
//   const [searchInput, setSearchInput] =useState('');
//   var filteredProducts = {}
//   const [filteredProducts1, setFilteredProducts] = useState()
//   async function handleChange(){
//     var input= document.getElementById('searchbar').value
//     // ev.preventDefault()
//     // c=input
//     // console.log(c)
//     // console.log(PRODUCTS)
//     setSearchInput(input)
//     setSearchInput(input)

//     console.log(searchInput.length)
//     console.log(searchInput)
  
//   if(searchInput.length>0){
//     setFilteredProducts( PRODUCTS.filter((product)=>
//       product.productName.includes(searchInput) || product.category.includes(searchInput)));

//     filteredProducts= PRODUCTS.filter((product)=>
//     product.productName.includes(searchInput) || product.category.includes(searchInput))
//     }
//   console.log('PRODUCT type', typeof(PRODUCTS))
//   console.log('PRODUCT ', (PRODUCTS))
//   console.log('filteredProducts',filteredProducts) 
//   console.log(typeof(filteredProducts))
//   console.log(typeof(filteredProducts1)) 
//   // setFilteredProducts(filteredProducts)
//   // Object.keys(filteredProducts).forEach(function(key, index) {
//   //   filteredProdArray[key]=(filteredProducts[key]);
//   // });
    
//    }
//   return (
//     <div id='shop' >
//       <h1 className='m-auto'><b>Products in stock</b></h1>
//       <div>
//         <input type='String' placeholder='Search' id='searchbar' className={'p-1'} ></input> 
//         <span><button onClick={handleChange}> Search</button></span>
//       </div>
//       {searchInput===''||searchInput===null ? 
//         <div id='shop-products' > {PRODUCTS.map((prodProp)=> ( <Product data={prodProp}/>))}  
//         </div> 
//         :
//         <div id='shop-products' >
//         {console.log(filteredProducts1.map((prodProp)=> ( <Product data={prodProp}/>)), filteredProducts,(searchInput))}
//          {/* {filteredProducts1.map((prodProp)=> ( <Product data={prodProp}/>))}   */}
//         </div> 
        
//       }
//     </div>
//   )
// }


