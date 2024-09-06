import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArtCardList from './pages/List/ArtCardList';
import Criar from './pages/Create/Create';
import Atualizar from './pages/Update/Update';
import Menu from './components/Menu';



function App() {
  return (    
    <Router>
      <Menu />
            <Routes>
            <Route path="/" element={<ArtCardList />} />
            <Route path="/criar" element={<Criar />} />
            <Route path="/atualizar/:id" element={<Atualizar />} />
            <Route path="*" element={<div>Página não encontrada</div>}/>
          </Routes>
  
    </Router>
  );
}

export default App;













