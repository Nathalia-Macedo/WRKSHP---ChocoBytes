import React from 'react';
import './NavBar.css'; // Estilização do componente

function SearchInput({ onChange }) {
  const handleInputChange = (event) => {
    onChange(event.target.value); // Chama a função onChange passando o valor do input
  };

  return (
    <div className="search-input-container">
      <input type="text" className="search-input" placeholder="Search..." onChange={handleInputChange} />
    </div>
  );
}

export default SearchInput;
