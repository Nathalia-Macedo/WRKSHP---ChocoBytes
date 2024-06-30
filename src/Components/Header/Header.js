import React, { useState } from 'react';
import { FaShoppingCart, FaHeart,FaBars, FaTimes,FaBuilding } from 'react-icons/fa';
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
            <FaBars /> Catálogo
          </li>
          <li>
            <FaHeart /> Favoritos
          </li>
          <li>
            <FaShoppingCart /> Carrinho
          </li>
          <li>
            <FaBuilding /> Sobre nós
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
