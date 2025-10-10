import React, { createContext, useState, useContext } from 'react';

// 1. Crear el contexto
const ThemeContext = createContext();

// 2. Crear el Proveedor del Contexto
// Este es un componente que gestionará el estado y lo proveerá a sus hijos.
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Estado inicial: claro
  
  // Función para alternar entre 'light' y 'dark'
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // El valor que será compartido con los componentes hijos
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Crear un Hook personalizado para usar el contexto
// Esto simplifica el uso del contexto en otros componentes.
export const useTheme = () => {
  return useContext(ThemeContext);
};
