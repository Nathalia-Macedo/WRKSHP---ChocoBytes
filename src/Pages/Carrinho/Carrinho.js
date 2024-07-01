import React, { useEffect } from 'react';
import './Carrinho.css';
import CardCar from '../../Components/CardCar/CardCar';
import { useChocolates } from '../../Context/produtos';

function Carrinho() {
  const { carrinho, setCarrinho } = useChocolates(); // Adicionei setCarrinho aqui

  useEffect(() => {
    const localData = localStorage.getItem('carrinho');
    if (localData) {
      setCarrinho(JSON.parse(localData)); // Atualiza o estado do carrinho com os dados do localStorage ao montar o componente
    }
  }, [setCarrinho]);

  const quantidadeItens = carrinho.length;
  const precoTotal = carrinho.reduce((total, item) => total + item.preco, 0);

  return (
    <>
      <div className="carrinho-info-bar">
        <span>Quantidade de itens: {quantidadeItens}</span>
        <span>Total: R${precoTotal.toFixed(2)}</span>
      </div>
      <CardCar />
    </>
  );
}

export default Carrinho;
