import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import {Shop} from '../pages/shop/Shop'
import {Cart} from '../pages/cart/Cart'
import Logo from '../assets/products/bikeLOGO.gif'
import './Navbar.css'

export const Navbar = () => {

  return (
    <div id='navbar' className='items-center h-18 py-2'>
        <div  className='flex items-center m-auto justify-between'>
            <div id='logo' className='flex text-white w-150 items-center '>
              <img id='logoImg' src={Logo}/>
              <b className='text-xl'>My Bike Store</b>
                
            </div>
            
            <div id='navs' className=' w-40 flex items-center mr-5'>
            <Link to='/' className='m-auto text-white' element={<Shop/>}> <b> Store </b></Link>
            <Link to='/cart' className='m-auto text-white' element={<Cart/>}> <b> <ShoppingCart size={32}/> </b> </Link>
            </div>
        </div>
    </div>
  )
}