import React from 'react';
import './Card.css'; // Arquivo CSS para estilização do cartão
import { FaHeart } from 'react-icons/fa';
function Card({ image, tipo, preco, descricao }) {
  // Função para lidar com o clique no botão de adicionar ao carrinho
  const handleAddToCart = () => {
    // Implemente a lógica aqui para adicionar o item ao carrinho
    alert(`Produto ${tipo} adicionado ao carrinho!`);
  };

  

  return (
    <div className="card">
      <img className="card-image" src={image} alt={tipo} />
      <div className="card-content">
        <h2 className="card-title">{tipo} <FaHeart /></h2>
        <p className="card-price">Preço: R${preco.toFixed(2)}</p>
        <p className="card-description">{descricao}</p>
      </div>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default Card;
