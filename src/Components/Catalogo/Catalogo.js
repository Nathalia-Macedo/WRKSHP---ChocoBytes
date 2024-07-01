import React from 'react';
import Card from '../ChocoCard/Card';
import './Catalogo.css';
import { useChocolates } from '../../Context/produtos';
import Maracuja from '../../Assets/maracuja.png';
import TortaLemon from '../../Assets/tortaLemon.png'
import Cake from '../../Assets/cakeStranberry.png';
import Buffet from '../../Assets/Buffet.png';
import Tiramisu from '../../Assets/tiramisu.png'
import Limao from '../../Assets/Limão.png';
import cakeRed from '../../Assets/cakeRed.png'
import cakeDourado from '../../Assets/cakeDourado.png'
import pavlova from '../../Assets/pavlova.png'

function Catalogo() {
  const { chocolates } = useChocolates();
  const primeirosNoveChocolates = chocolates.slice(0, 9);

  return (
    <div className="catalogo">
      {primeirosNoveChocolates.map(chocolate => (
        <Card
          key={chocolate.id}
          id={chocolate.id}
          image={getImageByTipo(chocolate.tipo)}  // Substitua por getImageByTipo ou diretamente por chocolate.imagem
          tipo={chocolate.tipo}
          preco={chocolate.preco}
          descricao={chocolate.descricao}
        />
      ))}
    </div>
  );
}

// Função auxiliar para obter a imagem com base no tipo de chocolate
function getImageByTipo(tipo) {
  switch (tipo) {
    case 'Peanut Choco':
      return Maracuja;
    case 'Lemon Dream':
      return Limao;
    case 'Buffet dos Sonhos':
      return Buffet;
    case 'Bolo de Morango':
      return Cake;
      case 'Bolo Dourado':
      return cakeDourado;
      case 'Pavlova':
        return pavlova;
      case 'Bolo de Frutas Vermelhas':
          return cakeRed;
      case 'Tiramisu':
            return Tiramisu;
      case 'Torta de Limão':
            return TortaLemon;
    default:
      return '';
  }
}

export default Catalogo;
