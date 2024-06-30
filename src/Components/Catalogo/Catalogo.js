
import React from 'react';
import Card from '../ChocoCard/Card'; // Caminho para o componente Card
import Maracuja from '../../Assets/maracuja.png';
import Cake from '../../Assets/cakeStranberry.png'
import Buffet from '../../Assets/Buffet.png'
import Limao from '../../Assets/Limão.png';
import './Catalogo.css'; // Importe o arquivo CSS com os estilos

function Catalogo() {
  const chocolates = [
    {
      id: 1,
      tipo: 'Peanut Choco',
      preco: 10.99,
      descricao: 'Chocolate cremoso, ao leite, com recheio de amendoin, castanhas e avelãs! Uma explosão de sabores!',
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
        descricao: 'Aproveite os melhores chocolates da casa, doces finos de chocolate amargo, Maracujá, limão, fodue doce e muito mais!',
        imagem: Buffet
      },
      {
          id: 3,
          tipo: 'Bolo de Morango',
          preco: 129.99,
          descricao: 'Bolo Tentação de Morango: Bolo de chocolate ao leite com camada de chantily, ganache e morangos decorados!',
          imagem: Cake
        }
    // Adicione mais chocolates conforme necessário
  ];

  return (
    <div className="catalogo"> {/* Aplica a classe 'catalogo' para o contêiner dos cards */}
      {chocolates.map(chocolate => (
        <Card
          key={chocolate.id}
          image={chocolate.imagem}
          tipo={chocolate.tipo}
          preco={chocolate.preco}
          descricao={chocolate.descricao}
        />
      ))}
    </div>
  );
}

export default Catalogo;
