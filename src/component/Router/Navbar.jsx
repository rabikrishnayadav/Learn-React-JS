import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../index.css';

function Navbar() {
  return (
    <>
        <div className="menu_style">
            <NavLink exact activeClassName='active_class' to='/'>Home</NavLink>
            <NavLink exact activeClassName='active_class' to='/user'>Users</NavLink>
            <NavLink exact activeClassName='active_class' to='/about'>About Us</NavLink>
            <NavLink exact activeClassName='active_class' to='/contact'>Contact Us</NavLink>
        </div>
    </>
  )
}

export default Navbar;