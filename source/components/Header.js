import { useState } from 'react';

import logo from '../../images/logo.png'
import cart from '../../images/cart.jpeg'

export default Header = () => {
  const [str, setStr ]= useState('Login')
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>
            <img className="cart" src={cart} />
          </li>
          <button className='logout-btn' onClick={()=>{str === 'Login' ? setStr('Logout') : setStr('Login')}}>{str}</button>
        </ul>
      </div>
    </div>
  );
};