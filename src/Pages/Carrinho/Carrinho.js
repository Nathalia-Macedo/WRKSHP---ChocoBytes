import React, { useEffect, useState } from 'react';
import './Carrinho.css';
import CardCar from '../../Components/CardCar/CardCar';
import { useChocolates } from '../../Context/produtos';

function Carrinho() {
  const { carrinho, setCarrinho } = useChocolates();
  const [precoTotal, setPrecoTotal] = useState(0);

  // Atualiza o carrinho com os dados do localStorage ao carregar a página
  useEffect(() => {
    const localData = localStorage.getItem('carrinho');
    if (localData) {
      setCarrinho(JSON.parse(localData));
    }
  }, [setCarrinho]);

  // Calcula o preço total sempre que o carrinho é atualizado
  useEffect(() => {
    const calcularPrecoTotal = () => {
      const total = carrinho.reduce((acc, item) => acc + (parseFloat(item.preco) * item.quantidade), 0);
      setPrecoTotal(total);
    };
  
    calcularPrecoTotal();
  }, [carrinho]);
  

  const quantidadeItens = carrinho.length;

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
