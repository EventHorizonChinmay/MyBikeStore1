import React from 'react'
import './Footer.css'

import { FaHome, FaPhone, FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
    return (
      <div className='footer'>
          <div className='footer-container'>
              
              <div className='left'>
               <div className='location'>
                  <div> 
                      <FaHome size={20} style={{color:'white' , marginTop:'4px' , marginRight:'2rem'}}/>
                  </div>
                  <div>
                      {/* <p style={{marginBottom:'-0.5rem'}}>
                          123, Great Apartments,
                      </p> */}
                      <p style={{marginBottom:'-0.5rem'}}>
                          New Delhi, IN,
                      </p>
                      <p style={{marginBottom:'-0.5rem'}}>
                          Earth, Solar System, Milkyway.
                      </p>
                  </div>                
               </div>
  
               <div className='phone'>
                  <h4>
                      <FaPhone size={20} style={{color:'white', marginRight:'2rem'}}/>
                  </h4>
                  <div>
                      <p> +91-8080-198-376</p>
                  </div>
               </div>
               <div className='email'>
                  <h4>
                      <FaEnvelope size={20} style={{color:'white', marginRight:'2rem'}}/>
                  </h4>
                  <div>
                      <p> chinmay.g22@gmail.com</p>
                  </div>
               </div>
  
                  
              </div>
              <div className='right'>
                  <h4> About me</h4>
                  <p> This is me Chinmay Gandevikar, a frontend developer. I enjoy building websites with my friends like JavaScript, React and Bootstrap. I hope your project ideas become my next challenge! </p>
                  
                  <br></br>
                  <div id='social' className='flex'>
                      <a href={'https://www.facebook.com/chinmay.gandevikar.1/'} target="_blank"><FaFacebook size={20} style={{color:'white', marginRight:'2rem'}} /></a>
                      <a href='https://twitter.com/Entropy_Sarir' target='_blank'><FaTwitter size={20} style={{color:'white', marginRight:'2rem'}}/></a>
                      <a href='https://www.linkedin.com/in/chinmay-gandevikar-98ab87134/?originalSubdomain=in' target='_blank'><FaLinkedin size={20} style={{color:'white', marginRight:'2rem'}}/></a>
                  
               
               </div>
              
              </div>
          </div>
      </div>
    )
  }