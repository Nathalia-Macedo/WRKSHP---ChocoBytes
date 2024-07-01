import React from 'react';
import './CardCar.css';
import { useChocolates } from '../../Context/produtos';
import { ChocolatesProvider } from '../../Context/produtos';
function CardCar() {
  const { chocolates, favoritos, carrinho } = useChocolates();
  return (
    <div className="carrinho-container">
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        carrinho.map(item => (
          <div key={item.id} className="carrinho-card">
            <img src={item.imagem} alt={item.tipo} className="carrinho-card-image" />
            <div className="carrinho-card-content">
              <h2 className="carrinho-card-title">{item.tipo}</h2>
              <p className="carrinho-card-description">{item.descricao}</p>
              <p className="carrinho-card-price">Preço: R${item.preco.toFixed(2)}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CardCar;