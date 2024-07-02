import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Card from '../../Components/ChocoCard/Card';
import { useChocolates } from '../../Context/produtos';
import './Favoritos.css';

function Favoritos() {
  const { favoritos, setFavoritos } = useChocolates();

  useEffect(() => {
    const favoritosFromLocalStorage = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(favoritosFromLocalStorage);
  }, [setFavoritos]);

  return (
    <>
      <Header />
      <div className="favoritos-container">
        {favoritos.length === 0 ? (
          <div className="empty-favoritos">
            <p>Sua lista de favoritos está vazia.</p>
            <Link to="/catalogo">
              <button className="btn-voltar-catalogo">Voltar ao Catálogo</button>
            </Link>
          </div>
        ) : (
          <div className="favoritos-list">
            {favoritos.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                image={item.imagem}
                tipo={item.tipo}
                preco={item.preco}
                descricao={item.descricao}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Favoritos;
