import React from 'react';
import { useChocolates } from '../../Context/produtos';
import Card from '../../Components/ChocoCard/Card';
import SearchInput from '../../Components/NavBar/NavBar';
import './Catalogo.css'; // Importar o CSS
import Header from '../../Components/Header/Header'
function PageCatalogo() {
  const { chocolates } = useChocolates();

  return (
    <>
    <Header/>
    <div className="page-catalogo">
      <div className="search-input-container">
        <SearchInput />
      </div>
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
    </div>
    </>
  );
}

export default PageCatalogo;
