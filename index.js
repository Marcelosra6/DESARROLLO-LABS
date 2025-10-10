import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importamos el componente App correctamente
import { ThemeProvider } from './context/ThemeContext'; // Importamos el proveedor

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
