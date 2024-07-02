import React, { createContext, useContext, useState, useEffect } from 'react';
import cakeRed from '../Assets/cakeRed.png';
import cupcake from '../Assets/cupcake.png';
import cheesecake from '../Assets/cheesecake.png';
import TortaLemon from '../Assets/tortaLemon.png';
import buffet from '../Assets/Buffet.png';
import pavlova from '../Assets/pavlova.png';
import tiramisu from '../Assets/tiramisu.png';
import Maracuja from '../Assets/maracuja.png';
import Limao from '../Assets/Limão.png';
import cakeDourado from '../Assets/cakeDourado.png';
import cakeStrawberry from '../Assets/cakeStranberry.png';

const ChocolatesContext = createContext();

export const useChocolates = () => useContext(ChocolatesContext);

export const ChocolatesProvider = ({ children }) => {
  const [chocolates, setChocolates] = useState([
    { id: 1, tipo: 'Peanut Choco', preco: 10.99, descricao: 'Chocolate cremoso, ao leite, com recheio de amendoim, castanhas e avelãs! Uma explosão de sabores!', imagem: Maracuja, quantidade: 1 },
    { id: 2, tipo: 'Lemon Dream', preco: 12.99, descricao: 'Chocolate intenso e amargo, ideal para os amantes do cacau. Com recheio de Mousse de Limão', imagem: Limao, quantidade: 1 },
    { id: 3, tipo: 'Buffet dos Sonhos', preco: 109.99, descricao: 'Aproveite os melhores chocolates da casa, doces finos de chocolate amargo, Maracujá, limão, fondue doce e muito mais!', imagem: buffet, quantidade: 1 },
    { id: 4, tipo: 'Bolo de Morango', preco: 129.99, descricao: 'Bolo Tentação de Morango: Bolo de chocolate ao leite com camada de chantilly, ganache e morangos decorados!', imagem: cakeStrawberry, quantidade: 1 },
    { id: 5, tipo: 'Bolo de Frutas Vermelhas', preco: 159.99, descricao: 'Bolo Tentação de Morango: Bolo de chocolate ao leite com camada de chantilly, ganache e morangos decorados!', imagem: cakeRed, quantidade: 1 },
    { id: 6, tipo: 'Bolo Dourado', preco: 159.99, descricao: 'Bolo Tentação de Morango: Bolo de chocolate ao leite com camada de chantilly, ganache e morangos decorados!', imagem: cakeDourado, quantidade: 1 },
    { id: 7, tipo: 'Pavlova', preco: 159.99, descricao: 'Bolo Tentação de Morango: Bolo de chocolate ao leite com camada de chantilly, ganache e morangos decorados!', imagem: pavlova, quantidade: 1 },
    { id: 8, tipo: 'Tiramisu', preco: 59.99, descricao: 'Bolo Tentação de Morango: Bolo de chocolate ao leite com camada de chantilly, ganache e morangos decorados!', imagem: tiramisu, quantidade: 1 },
    { id: 9, tipo: 'Torta de Limão', preco: 59.99, descricao: 'Torta de limão siciliano, com massa de biscoito!', imagem: TortaLemon, quantidade: 1 },
    { id: 10, tipo: 'Cheesecake de Frutas Vermelhas', preco: 59.99, descricao: 'Cheesecake com calda e decoração de frutas vermelhas!', imagem: cheesecake, quantidade: 1 },
    { id: 11, tipo: 'Cupcake', preco: 59.99, descricao: 'Cupcake de abacaxi com chantily cremoso!', imagem: cupcake, quantidade: 1 }
  ]);

  const [carrinho, setCarrinho] = useState(() => {
    const localData = localStorage.getItem('carrinho');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const [favoritos, setFavoritos] = useState(() => {
    const localFavoritos = localStorage.getItem('favoritos');
    return localFavoritos ? JSON.parse(localFavoritos) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const adicionarFavorito = (chocolate) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, chocolate]);
  };

  const removerFavorito = (id) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((item) => item.id !== id));
  };

  const adicionarAoCarrinho = (chocolate) => {
    const novoItem = { ...chocolate, quantidade: 1 }; // Definindo a quantidade inicial como 1
    setCarrinho((prevCarrinho) => {
      const novoCarrinho = [...prevCarrinho, novoItem];
      localStorage.setItem('carrinho', JSON.stringify(novoCarrinho)); // Atualizando o localStorage
      return novoCarrinho;
    });
  };

  const removerDoCarrinho = (id) => {
    setCarrinho((prevCarrinho) => prevCarrinho.filter((item) => item.id !== id));
  };

  const incrementarQuantidade = (id) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  const decrementarQuantidade = (id) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((item) =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    );
  };

  return (
    <ChocolatesContext.Provider value={{
      chocolates,
      adicionarFavorito,
      removerFavorito,
      setChocolates,
      favoritos,
      setFavoritos,
      carrinho,
      setCarrinho,
      adicionarAoCarrinho,
      removerDoCarrinho,
      incrementarQuantidade,
      decrementarQuantidade
    }}>
      {children}
    </ChocolatesContext.Provider>
  );
};
