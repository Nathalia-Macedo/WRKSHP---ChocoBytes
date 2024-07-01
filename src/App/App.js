import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageCatalogo from '../Pages/Catalogo/index';
import Home from '../Pages/Home/Home';
import Carrinho from '../Pages/Carrinho/Carrinho';
import { ChocolatesProvider } from '../Context/produtos';
function App() {
  return (
    <ChocolatesProvider>
    <Router>
     
      <Routes>
        <Route path='/catalogo' element={<PageCatalogo />} />
        <Route path='/' element={<Home />} />
        <Route path='/carrinho' element={<Carrinho />} />
      </Routes>
    
    </Router>
    </ChocolatesProvider>
  );
}

export default App;
