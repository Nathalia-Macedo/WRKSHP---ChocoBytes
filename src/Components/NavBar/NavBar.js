import React from 'react';
import './NavBar.css'; // Estilização do componente

function SearchInput() {
  return (
    <div className="search-input-container">
      <input type="text" className="search-input" placeholder="Search..." />
    </div>
  );
}

export default SearchInput;
