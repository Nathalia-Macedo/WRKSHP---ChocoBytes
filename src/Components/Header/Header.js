import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart,FaBars, FaTimes,FaBuilding,FaHome } from 'react-icons/fa';
import logo from '../../Assets/Artboard_2-removebg-preview.png';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <nav className={menuOpen ? 'active' : ''}>
        <ul>
          <li>
           <FaHome/> <Link className='link' to={'/'}>Home</Link>
            </li>
          <li>
            <FaBars /> 
            <Link className='link' to='/catalogo'>Catálogo</Link>
          </li>
          <li>
            <FaHeart /> <Link className='link' to='/favoritos'>Favoritos</Link>
          </li>
          <li>
            <FaShoppingCart /> <Link className='link' to='/carrinho'>Carrinho</Link>
          </li>
          <li>
            <FaBuilding /> <Link className='link' to='/sobreNos'>Sobre Nós</Link>
          </li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      
    </header>
  );
}

export default Header;
