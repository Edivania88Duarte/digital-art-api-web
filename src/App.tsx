import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArtCardList from './pages/List/ArtCardList';
import Menu from './components/Menu';
import Create from './pages/Create/Create';
import Update from './pages/Update/Update';
import Gallery from './pages/Gallery/Gallery';


function App() {
  return (    
    <Router>
      <Menu />
            <Routes>
            <Route path="/" element={<ArtCardList />} />
            <Route path="/criar" element={<Create />} />
            <Route path="/atualizar/:id" element={<Update />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="*" element={<div>Página não encontrada</div>}/>
          </Routes>
  
    </Router>
  );
}

export default App;













