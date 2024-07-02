import React, { useState } from 'react';
import { useChocolates } from '../../Context/produtos';
import Card from '../../Components/ChocoCard/Card';
import SearchInput from '../../Components/NavBar/NavBar';
import './Catalogo.css'; // Importar o CSS
import Header from '../../Components/Header/Header';

function PageCatalogo() {
  const { chocolates } = useChocolates();
  const [filtro, setFiltro] = useState('');

  // Função para atualizar o filtro de busca
  const handleSearchChange = (value) => {
    setFiltro(value);
  };

  // Filtrar chocolates com base no texto digitado no input
  const chocolatesFiltrados = chocolates.filter(chocolate =>
    chocolate.tipo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="page-catalogo">
        <div className="search-input-container">
          <SearchInput onChange={handleSearchChange} />
        </div>
        <div className="catalogo">
          {chocolatesFiltrados.map(chocolate => (
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
