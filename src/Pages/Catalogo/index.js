import React from 'react';
import { useChocolates } from '../../Context/produtos';
import Card from '../../Components/ChocoCard/Card';

function PageCatalogo() {
  const { chocolates } = useChocolates();

  return (
    <div className="catalogo">
      {chocolates.map(chocolate => (
        <Card
          key={chocolate.id}
          id={chocolate.id}
          image={chocolate.imagem}
          tipo={chocolate.tipo}
          preco={chocolate.preco}
          descricao={chocolate.descricao}
        />
      ))}
    </div>
  );
}

export default PageCatalogo;
