import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageCatalogo from '../Pages/Catalogo/index';
import Home from '../Pages/Home/Home';
import SobreNos from '../Pages/SobreNos/sobreNos';
import Carrinho from '../Pages/Carrinho/Carrinho';
import { ChocolatesProvider } from '../Context/produtos';
import Notification from '../Components/Notifications/Notification';

function App() {
  const [notification, setNotification] = useState({ show: false, message: '' });

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000); // A notificação desaparece após 3 segundos
  };

  return (
    <ChocolatesProvider>
      <Router>
        <Routes>
          <Route path='/catalogo' element={<PageCatalogo showNotification={showNotification} />} />
          <Route path='/' element={<Home />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/sobreNos' element={<SobreNos />} />
        </Routes>
      </Router>
      <Notification show={notification.show} message={notification.message} />
    </ChocolatesProvider>
  );
}

export default App;
