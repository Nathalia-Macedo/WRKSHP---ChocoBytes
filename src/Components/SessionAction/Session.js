import React from 'react';
import './Session.css';
import banner from '../../Assets/banca.png';

function Session() {
  return (
    <section className='banner'>
      <img src={banner} alt="logo" className="banner-img" />
      <div className="banner-text">
        <h2>Conheça a ChocoBytes</h2>
        <p>
          Descubra uma variedade deliciosa de chocolates feitos com ingredientes de qualidade. Explore nossas opções e encontre o seu favorito hoje mesmo!
        </p>
      </div>
    </section>
  );
}

export default Session;
