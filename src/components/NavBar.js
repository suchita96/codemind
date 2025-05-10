import React from 'react';
import {NavLink ,Link} from 'react-router-dom';
//npm install react-router-dom
export default function NavBar() {
  return (
    <div>

        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <NavLink to='/about'>About Us</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact Us</NavLink>
            </li>
        </ul>
    </div>
  )
}
