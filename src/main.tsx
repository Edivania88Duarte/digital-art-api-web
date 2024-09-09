import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Essa é a forma correta para React 18
import App from './App';
import { GlobalStyles } from './styles/GlobalStyles';
import React from 'react';

const rootElement = document.getElementById('root'); // Seleciona o elemento raiz
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
      <GlobalStyles />
    </StrictMode>,
  );
}

// import React from 'react';
// import { ReactDOM } from 'react';
// import App from './App';
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')) as HTMLElement.render(
//   <React.StrictMode>
//   <App />
//   </React.StrictMode>
// )

