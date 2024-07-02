import React from 'react';
import './CardCar.css';
import { useChocolates } from '../../Context/produtos';

function CardCar() {
  const { carrinho, removerDoCarrinho, incrementarQuantidade, decrementarQuantidade } = useChocolates();

  return (
    <div className="carrinho-container">
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        carrinho.map(item => (
          <div key={item.id} className="carrinho-card">
            <button className="remove-button" onClick={() => removerDoCarrinho(item.id)}>X</button>
            <img src={item.imagem} alt={item.tipo} className="carrinho-card-image" />
            <div className="carrinho-card-content">
              <h2 className="carrinho-card-title">{item.tipo}</h2>
              <p className="carrinho-card-description">{item.descricao}</p>
              <p className="carrinho-card-price">
                Preço: R${(item.preco * item.quantidade).toFixed(2)}
              </p>
              <div className="quantity-controls">
                <button className="quantity-button" onClick={() => decrementarQuantidade(item.id)}>-</button>
                <span className="quantity">{item.quantidade}</span>
                <button className="quantity-button" onClick={() => incrementarQuantidade(item.id)}>+</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CardCar;
