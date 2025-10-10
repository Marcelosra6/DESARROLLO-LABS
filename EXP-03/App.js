import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext'; // Importamos el ThemeProvider
import Content from './components/Content'; // Importación default
import ThemeSwitcher from './components/ThemeSwitcher'; // Importación default

function App() {
  return (
    <div className="App">
      <Content />
      <ThemeSwitcher />
    </div>
  );
}

export default App; 
