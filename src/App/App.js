import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageCatalogo from '../Pages/Catalogo/index';
import Home from '../Pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/catalogo' element={<PageCatalogo />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
