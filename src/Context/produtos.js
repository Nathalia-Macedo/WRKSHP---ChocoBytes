import React, { createContext, useContext, useState } from 'react';
import cakeRed from '../Assets/cakeRed.png'
import buffet from '../Assets/Buffet.png'
import pavlova from '../Assets/pavlova.png'
import tiramisu from '../Assets/tiramisu.png'
import Maracuja from '../Assets/maracuja.png'
import Limao from '../Assets/Limão.png'
import cakeDourado from '../Assets/cakeDourado.png'
import cakeStranberry from '../Assets/cakeStranberry.png'
// Cria o contexto
const ChocolatesContext = createContext();

// Hook para usar o contexto
export const useChocolates = () => useContext(ChocolatesContext);

// Provedor do contexto
export const ChocolatesProvider = ({ children }) => {
  const [chocolates, setChocolates] = useState([
    {
      id: 1,
      tipo: 'Peanut Choco',
      preco: 10.99,
      descricao: 'Chocolate cremoso, ao leite, com recheio de amendoim, castanhas e avelãs! Uma explosão de sabores!',
      imagem: Maracuja
    },
    {
      id: 2,
      tipo: 'Lemon Dream',
      preco: 12.99,
      descricao: 'Chocolate intenso e amargo, ideal para os amantes do cacau. Com recheio de Mousse de Limão',
      imagem: Limao
    },
    {
      id: 3,
      tipo: 'Buffet dos Sonhos',
      preco: 109.99,
      descricao: 'Aproveite os melhores chocolates da casa, doces finos de chocolate amargo, Maracujá, limão, fondue doce e muito mais!',
      imagem: buffet
    },
    {
      id: 4,
      tipo: 'Bolo de Morango',
      preco: 129.99,
      descricao: 'Bolo Tentação de Morango: Bolo de chocolate ao leite com camada de chantilly, ganache e morangos decorados!',
      imagem: cakeStranberry
    }
    ,
    {
      id: 5,
      tipo: 'Bolo de Frutas Vermelhas',
      preco: 159.99,
      descricao: 'Bolo Tentação de Morango: Bolo de chocolate ao leite com camada de chantilly, ganache e morangos decorados!',
      imagem: cakeRed
    }
    ,
    {
      id: 6,
      tipo: 'Bolo Dourado',
      preco: 159.99,
      descricao: 'Bolo Tentação de Morango: Bolo de chocolate ao leite com camada de chantilly, ganache e morangos decorados!',
      imagem: cakeDourado
    },
    {
      id: 7,
      tipo: 'Pavlova',
      preco: 159.99,
      descricao: 'Bolo Tentação de Morango: Bolo de chocolate ao leite com camada de chantilly, ganache e morangos decorados!',
      imagem: pavlova
    },{
      id: 8,
      tipo: 'Tiramisu',
      preco: 59.99,
      descricao: 'Bolo Tentação de Morango: Bolo de chocolate ao leite com camada de chantilly, ganache e morangos decorados!',
      imagem: tiramisu
    }
  ]);

  const [favoritos, setFavoritos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  const adicionarFavorito = (chocolate) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, chocolate]);
  };

  const removerFavorito = (id) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((item) => item.id !== id));
  };

  const adicionarAoCarrinho = (chocolate) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, chocolate]);
  };

  const removerDoCarrinho = (id) => {
    setCarrinho((prevCarrinho) => prevCarrinho.filter((item) => item.id !== id));
  };

  return (
    <ChocolatesContext.Provider value={{
      chocolates,
      setChocolates,
      favoritos,
      adicionarFavorito,
      removerFavorito,
      carrinho,
      adicionarAoCarrinho,
      removerDoCarrinho
    }}>
      {children}
    </ChocolatesContext.Provider>
  );
};