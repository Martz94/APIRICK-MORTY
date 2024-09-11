import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-link'>
        <li>
          <h3 className='navbar-link'><Link to="/">Inicio</Link></h3>
        </li>
        <li>
          <h3><Link to="/favorites">Favoritos</Link></h3>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
