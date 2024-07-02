import React from 'react';
import './sobreNos.css';
import eu from '../../Assets/eu.jpg';
import logo from '../../Assets/Artboard_2-removebg-preview.png';
import torta from '../../Assets/banca.png';
import Header from '../../Components/Header/Header';

function SobreNos() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="card1">
          <div className="card-content1">
            <p>
              Na ChocoBytes, mergulhamos no mundo encantador dos chocolates
              finos com uma paixão inigualável. Desde a nossa fundação,
              buscamos não apenas satisfazer, mas encantar os paladares mais
              exigentes com nossas criações artesanais. Combinamos
              cuidadosamente os melhores ingredientes, técnicas tradicionais e
              inovação para oferecer uma experiência única a cada mordida.
            </p>
          </div>
        </div>
        <div className="card1">
          <div className="card-content1">
            <p>
              A ChocoBytes foi pensada e idealizada por Nathalia de Macedo
              Martins, programadora Front End, professora na Infinity School!<br/>
              Desenvolvi a ChocoBytes inicialmente devido a um workshop que será ministrado no dia 12/07 na Infinity, mas pretendo aprender o back end e aprimorar, tornando uma aplicação real!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SobreNos;
