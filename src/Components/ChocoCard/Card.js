import React from 'react';
import { useEffect } from 'react';
import './Card.css'; // Arquivo CSS para estilização do cartão
import { FaHeart } from 'react-icons/fa';
import { useChocolates } from '../../Context/produtos';

function Card({ id, image, tipo, preco, descricao }) {
  const { adicionarFavorito, removerFavorito, favoritos, adicionarAoCarrinho,carrinho } = useChocolates();
  const isFavorito = favoritos.some((item) => item.id === id);

  const handleFavoritoClick = () => {
    if (isFavorito) {
      removerFavorito(id);
    } else {
      adicionarFavorito({ id, tipo, preco, descricao, imagem: image });
    }
  };

  const handleAddToCart = () => {
    const itemNoCarrinho = { id, tipo, preco, descricao, imagem: image };
    adicionarAoCarrinho(itemNoCarrinho);
  };


  useEffect(() => {
    console.log(carrinho);
  }, [carrinho]); // Executa o console.log sempre que carrinho mudar

  return (
    <div className="card">
      <img className="card-image" src={image} alt={tipo} />
      <div className="card-content">
        <h2 className="card-title">{tipo} <FaHeart
          onClick={handleFavoritoClick}
          style={{ color: isFavorito ? 'red' : 'black', cursor: 'pointer' }}
        /></h2>
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
